import React, { useState, useEffect } from 'react';
import { messagesAPI, notificationsAPI, authAPI } from '../service/api';

const NotificationsPage = ({ onBack, showHeader = true }) => {
  const [activeTab, setActiveTab] = useState('inbox');
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Compose message state
  const [messageSubject, setMessageSubject] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [recipientType, setRecipientType] = useState('individual'); // 'individual' or 'broadcast'

  // Notification compose state
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('info'); // 'info', 'warning', 'success', 'error'

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [messagesRes, notificationsRes, usersRes] = await Promise.allSettled([
        messagesAPI.getInbox(),
        notificationsAPI.getNotifications(),
        authAPI.getUsers()
      ]);

      if (messagesRes.status === 'fulfilled') {
        setMessages(messagesRes.value);
      }

      if (notificationsRes.status === 'fulfilled') {
        setNotifications(notificationsRes.value);
      }

      if (usersRes.status === 'fulfilled') {
        setUsers(usersRes.value);
      }

    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    try {
      if (recipientType === 'broadcast') {
        // Send as notification broadcast
        await notificationsAPI.broadcastNotification({
          title: messageSubject,
          message: messageContent,
          type: 'info'
        });
      } else {
        // Send individual messages
        for (const recipientId of selectedRecipients) {
          await messagesAPI.sendMessage({
            recipient: recipientId,
            subject: messageSubject,
            content: messageContent
          });
        }
      }

      // Reset form
      setMessageSubject('');
      setMessageContent('');
      setSelectedRecipients([]);
      setRecipientType('individual');

      // Refresh data
      await fetchData();
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message');
    }
  };

  const handleSendNotification = async () => {
    try {
      await notificationsAPI.createNotification({
        title: notificationTitle,
        message: notificationMessage,
        type: notificationType
      });

      // Reset form
      setNotificationTitle('');
      setNotificationMessage('');
      setNotificationType('info');

      // Refresh data
      await fetchData();
    } catch (error) {
      console.error('Error sending notification:', error);
      setError('Failed to send notification');
    }
  };

  const handleMarkAsRead = async (messageId, isNotification = false) => {
    try {
      if (isNotification) {
        await notificationsAPI.markAsRead(messageId);
        setNotifications(prev => prev.map(n =>
          n.id === messageId ? { ...n, is_read: true } : n
        ));
      } else {
        await messagesAPI.markAsRead(messageId);
        setMessages(prev => prev.map(m =>
          m.id === messageId ? { ...m, is_read: true } : m
        ));
      }
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };


  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full">
      {showHeader && (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-8">
              <button onClick={onBack} className="flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Dashboard
              </button>
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
                <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight">Campus Fleet</h2>
              </div>
            </div>
          </div>
        </header>
      )}

      {!showHeader && (
        <div className="px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800">
          <button onClick={onBack} className="flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Dashboard
          </button>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto py-8 px-4 md:px-10">
        <div className="flex h-[600px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Left Pane: Conversations List */}
        <aside className="w-[380px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
          <div className="p-4 space-y-4">
            <div className="flex flex-col">
              <h1 className="text-[#0d141b] dark:text-white text-lg font-bold">Message Center</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Manage fleet-wide communications</p>
            </div>

            {/* SearchBar */}
            <label className="flex flex-col w-full h-10">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="text-slate-500 flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-sm placeholder:text-slate-500 px-3"
                  placeholder="Search drivers or technicians..."
                />
              </div>
            </label>

            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <button className="flex-1 text-xs font-bold py-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">
                Direct
              </button>
              <button className="flex-1 text-xs font-bold py-1.5 rounded-md text-slate-500">
                Alerts
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer group transition-colors ${
                  !message.is_read
                    ? 'bg-primary/10 border-l-4 border-primary'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => handleMarkAsRead(message.id, false)}
              >
                <div className="relative">
                  <div className="size-11 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {message.sender_name ? message.sender_name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  {!message.is_read && (
                    <span className="absolute -top-1 -right-1 size-3 bg-primary rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-[#0d141b] dark:text-white truncate">
                      {message.sender_name || 'Unknown Sender'}
                    </h3>
                    <span className="text-[10px] text-primary font-bold">
                      {new Date(message.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 truncate font-medium">
                    {message.subject || message.content?.substring(0, 50) + '...'}
                  </p>
                </div>
                {!message.is_read && (
                  <div className="size-2 bg-primary rounded-full"></div>
                )}
              </div>
            ))}
            {messages.length === 0 && !loading && (
              <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-4xl mb-2">mail</span>
                <p>No messages yet</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('compose')}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-lg">edit</span>
              New Message
            </button>
          </div>
        </aside>

        {/* Right Pane: Active Workspace */}
        <section className="flex-1 bg-background-light dark:bg-background-dark flex flex-col overflow-y-auto">
          {/* SectionHeader */}
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[#0d141b] dark:text-white text-xl font-bold">Compose Notification</h2>
                <p className="text-slate-500 text-sm">Send a broadcast or individual alert</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg text-sm bg-white dark:bg-slate-800">
                  Discard
                </button>
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-4">
              <div className="flex border-b border-slate-100 dark:border-slate-800 gap-8">
                <button
                  onClick={() => setActiveTab('compose')}
                  className={`flex items-center gap-2 pb-3 pt-2 transition-colors ${
                    activeTab === 'compose'
                      ? 'border-b-[3px] border-primary text-primary'
                      : 'border-b-[3px] border-transparent text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">campaign</span>
                  <p className="text-sm font-bold tracking-[0.015em]">Compose</p>
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`flex items-center gap-2 pb-3 pt-2 transition-colors ${
                    activeTab === 'history'
                      ? 'border-b-[3px] border-primary text-primary'
                      : 'border-b-[3px] border-transparent text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">history</span>
                  <p className="text-sm font-bold tracking-[0.015em]">History</p>
                </button>
              </div>
            </div>
          </div>

          {activeTab === 'compose' && (
            <div className="p-8 max-w-[1000px] w-full mx-auto space-y-6">
              {/* Broadcast Toggle Section */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0d141b] dark:text-white">Broadcast Options</h3>
                    <p className="text-xs text-slate-500">Toggle to send to all members in a group</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">info</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="relative flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-all flex-1 min-w-[200px]">
                    <div className="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">drive_eta</span>
                    </div>
                    <input
                      className="form-checkbox size-5 text-primary rounded border-slate-300 focus:ring-primary"
                      type="checkbox"
                      checked={selectedRecipients.includes('drivers')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRecipients([...selectedRecipients, 'drivers']);
                        } else {
                          setSelectedRecipients(selectedRecipients.filter(r => r !== 'drivers'));
                        }
                      }}
                    />
                    <div>
                      <p className="text-sm font-bold text-[#0d141b] dark:text-white">All Drivers</p>
                      <p className="text-xs text-slate-500">42 Recipients</p>
                    </div>
                  </label>
                  <label className="relative flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer flex-1 min-w-[200px]">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <span className="material-symbols-outlined text-primary">engineering</span>
                    </div>
                    <input
                      className="form-checkbox size-5 text-primary rounded border-slate-300 focus:ring-primary"
                      type="checkbox"
                      checked={selectedRecipients.includes('technicians')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRecipients([...selectedRecipients, 'technicians']);
                        } else {
                          setSelectedRecipients(selectedRecipients.filter(r => r !== 'technicians'));
                        }
                      }}
                    />
                    <div>
                      <p className="text-sm font-bold text-primary">All Technicians</p>
                      <p className="text-xs text-primary/70">12 Recipients</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message Editor */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[400px]">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="material-symbols-outlined text-slate-500">edit</span>
                    <input
                      className="w-full border-none focus:ring-0 bg-transparent text-lg font-bold placeholder:text-slate-400 dark:text-white"
                      placeholder="Notification Subject"
                      value={messageSubject}
                      onChange={(e) => setMessageSubject(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary" title="Attach File">
                      <span className="material-symbols-outlined">attach_file</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary" title="Insert Link">
                      <span className="material-symbols-outlined">link</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary" title="Insert Image">
                      <span className="material-symbols-outlined">image</span>
                    </button>
                  </div>
                </div>

                {/* Rich Text Toolbar */}
                <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-slate-500">text_format</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Format</span>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Bold">
                      <span className="material-symbols-outlined text-sm">format_bold</span>
                    </button>
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Italic">
                      <span className="material-symbols-outlined text-sm">format_italic</span>
                    </button>
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Underline">
                      <span className="material-symbols-outlined text-sm">format_underlined</span>
                    </button>
                  </div>
                  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-slate-500">list</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Lists</span>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Bullet List">
                      <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                    </button>
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Numbered List">
                      <span className="material-symbols-outlined text-sm">format_list_numbered</span>
                    </button>
                  </div>
                  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-slate-500">add_link</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Insert</span>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Insert Link">
                      <span className="material-symbols-outlined text-sm">link</span>
                    </button>
                    <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" title="Insert Image">
                      <span className="material-symbols-outlined text-sm">image</span>
                    </button>
                  </div>
                </div>

                <textarea
                  className="flex-1 p-6 border-none focus:ring-0 bg-transparent resize-none text-slate-700 dark:text-slate-300 placeholder:text-slate-400 text-base"
                  placeholder="Write your message here..."
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                />

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                      <span className="material-symbols-outlined text-sm">description</span>
                      schedule_revised.pdf
                      <button className="ml-2 hover:text-red-500">
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  <h3 className="text-sm font-bold text-[#0d141b] dark:text-white uppercase tracking-wider">Recent Broadcasts</h3>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3 shadow-sm">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-sm ${
                          notification.is_read ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {notification.is_read ? 'check_circle' : 'notifications'}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                          notification.is_read
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {notification.is_read ? 'READ' : 'UNREAD'}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        {new Date(notification.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0d141b] dark:text-white truncate flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-slate-500">campaign</span>
                      {notification.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500">Type</p>
                        <p className="text-sm font-bold text-primary">{notification.type}</p>
                      </div>
                      {!notification.is_read && (
                        <button
                          onClick={() => handleMarkAsRead(notification.id, true)}
                          className="text-xs text-primary hover:underline"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {notifications.length === 0 && !loading && (
                  <div className="col-span-full text-center py-8 text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-4xl mb-2">notifications</span>
                    <p>No notifications yet</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;