<h1>Système de gestion du parc automobile du campus</h1>

<h2>Description</h2>
<p>
  Ce projet est une application de gestion du parc automobile et des accessoires du campus.
  Elle permet de centraliser toutes les informations liées aux véhicules, aux pannes, aux réparations
  et au stock d’accessoires, avec des interfaces adaptées à chaque type d’utilisateur :
  <strong>Admin, Chauffeur et Technicien</strong>.
</p>
<p>
  L’objectif est d’améliorer le suivi des véhicules, la rapidité de traitement des pannes,
  la gestion des réparations, le contrôle du stock et la communication interne via des messages
  et notifications.
</p>

<h2>Objectifs</h2>
<ul>
  <li>Digitaliser la gestion des véhicules du campus</li>
  <li>Réduire les pertes d’accessoires et de pièces</li>
  <li>Améliorer la traçabilité des réparations</li>
  <li>Faciliter la communication entre les utilisateurs</li>
  <li>Générer des rapports journaliers et hebdomadaires</li>
</ul>

<h2>Types d’Utilisateurs et Fonctionnalités</h2>

<h3>1. Admin</h3>
<p>L’Administrateur est le super-utilisateur du système.</p>
<ul>
  <li>CRUD sur les comptes utilisateurs</li>
  <li>CRUD sur les véhicules</li>
  <li>CRUD sur les accessoires</li>
  <li>Gestion du stock total</li>
  <li>Gestion des messages</li>
  <li>Envoi de notifications aux utilisateurs</li>
  <li>Suivi global des réparations et pannes</li>
  <li>Tableau de bord (statistiques et alertes)</li>
</ul>

<h3>2. Chauffeur</h3>
<p>Le Chauffeur est responsable de signaler l’état de son véhicule.</p>
<ul>
  <li>Connexion (login)</li>
  <li>Consultation du véhicule assigné</li>
  <li>Déclaration de panne</li>
  <li>Signalement de problèmes</li>
  <li>Rapports journaliers</li>
  <li>Rapports hebdomadaires</li>
  <li>Consultation de l’historique des pannes</li>
</ul>

<h3>3. Technicien</h3>
<p>Le Technicien gère les réparations et le stock.</p>
<ul>
  <li>Connexion (login)</li>
  <li>Liste des pannes à traiter</li>
  <li>Enregistrement des réparations</li>
  <li>Saisie de la date de réparation</li>
  <li>Ajout de facture</li>
  <li>Déduction automatique des pièces prises dans le stock</li>
  <li>Signalement de fin de réparation</li>
  <li>Ajout de nouveaux accessoires au stock</li>
</ul>

<h2>Interfaces Principales</h2>

<h3>Admin</h3>
<ul>
  <li>Dashboard (vue d’ensemble du parc)</li>
  <li>Gestion des véhicules et accessoires</li>
  <li>Gestion des comptes utilisateurs</li>
  <li>Centre de messages et notifications</li>
</ul>

<h3>Chauffeur</h3>
<ul>
  <li>Portail chauffeur</li>
  <li>Déclaration de panne</li>
  <li>Rapports journalier et hebdomadaire</li>
</ul>

<h3>Technicien</h3>
<ul>
  <li>Liste des réparations</li>
  <li>Formulaire de réparation</li>
  <li>Gestion du stock</li>
</ul>

<h2>Technologies (à adapter)</h2>
<ul>
  <li>Frontend : React, Flutter, JavaFX, Tkinter</li>
  <li>Backend : Node.js, Django, Spring Boot</li>
  <li>Base de données : MySQL, PostgreSQL, SQLite</li>
  <li>Authentification : JWT, Sessions</li>
  <li>Notifications : Email, Push, In-app</li>
</ul>

<h2>Installation (exemple générique)</h2>
<ol>
  <li>
    Cloner le dépôt
    <pre>git clone https://github.com/ivan-14-dev/ictparkingCars.git</pre>
  </li>
  <li>
    Accéder au dossier du projet
    <pre>cd ictfeetCars</pre>
  </li>
  <li>
    Installer les dépendances
    <pre>npm install
# ou
pip install -r requirements.txt</pre>
  </li>
  <li>
    Lancer l’application
    <pre>npm start
# 
python manage.py runserver</pre>
  </li>
</ol>

<h2>Améliorations Futures</h2>
<ul>
  <li>Géolocalisation des véhicules</li>
  <li>QR code pour chaque véhicule</li>
  <li>Historique détaillé des pièces</li>
  <li>Export PDF des rapports</li>
  <li>Application mobile</li>
  <li>Rôles personnalisés</li>
</ul>

<h2>Auteur</h2>
<p>
  ICT University & Students <br>
  Projet académique – Gestion du patrimoine automobile du campus
</p>