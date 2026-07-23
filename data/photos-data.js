/* ==========================================================
   DONNÉES PHOTOS — modifie ce fichier pour changer tes albums
   ==========================================================
   Ne touche pas au reste du site : gère tout depuis ce fichier,
   ou plus simplement depuis admin.html (back-office visuel).

   Structure :
   window.ALBUMS = {
     cle_album: {
       title: "Nom affiché de l'album",
       photos: [ "url1", "url2", ... ]   // ordre = ordre d'affichage
     },
     ...
   }
   Les 5 premières photos de chaque album servent au défilement
   automatique quand on survole la carte sur le site.

   window.PROFILE_PHOTO = "url de ta photo de profil (section À propos)"
   ========================================================== */
window.PROFILE_PHOTO = "https://picsum.photos/seed/portrait/800/1000";

window.ALBUMS = {
  sport: {
    title: "Sport",
    photos: [
      "https://picsum.photos/seed/sport-1/900/1200",
      "https://picsum.photos/seed/sport-2/900/1200",
      "https://picsum.photos/seed/sport-3/900/1200",
      "https://picsum.photos/seed/sport-4/900/1200",
      "https://picsum.photos/seed/sport-5/900/1200",
      "https://picsum.photos/seed/sport-6/900/1200",
      "https://picsum.photos/seed/sport-7/900/1200",
    ]
  },
  concerts: {
    title: "Concerts & Festivals",
    photos: [
      "https://picsum.photos/seed/concert-1/900/1200",
      "https://picsum.photos/seed/concert-2/900/1200",
      "https://picsum.photos/seed/concert-3/900/1200",
      "https://picsum.photos/seed/concert-4/900/1200",
      "https://picsum.photos/seed/concert-5/900/1200",
      "https://picsum.photos/seed/concert-6/900/1200",
    ]
  },
  evenementiel: {
    title: "Événementiel local",
    photos: [
      "https://picsum.photos/seed/event-1/900/1200",
      "https://picsum.photos/seed/event-2/900/1200",
      "https://picsum.photos/seed/event-3/900/1200",
      "https://picsum.photos/seed/event-4/900/1200",
      "https://picsum.photos/seed/event-5/900/1200",
    ]
  },
  reseaux: {
    title: "Contenus Réseaux Sociaux",
    photos: [
      "https://picsum.photos/seed/social-1/900/1200",
      "https://picsum.photos/seed/social-2/900/1200",
      "https://picsum.photos/seed/social-3/900/1200",
      "https://picsum.photos/seed/social-4/900/1200",
      "https://picsum.photos/seed/social-5/900/1200",
    ]
  }
};
