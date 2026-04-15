// config.js — Configuración global de Google Drive
// ─────────────────────────────────────────────────
// Rellena apiKey y folderId para activar la sincronización automática
// con Google Drive en TODOS los dispositivos que accedan a esta app.
//
// Cómo obtener los valores:
//   apiKey   → console.cloud.google.com → Credenciales → Clave de API
//   folderId → ID en la URL de tu carpeta de Drive:
//              drive.google.com/drive/folders/ESTE_ES_EL_ID
//
// Una vez rellenado, sube este archivo a GitHub junto con index.html.
// ─────────────────────────────────────────────────

window.DRIVE_CONFIG = {
  apiKey:     '',   // Ej: 'AIzaSyBZtopBU4WTxX0laxV_97niIcEdCphBoxY'
  folderId:   '',   // Ej: '1KNNzGdc69EMFXcTER7xPyh9GqSgx9ybh'
  defaultCat: 'General'
};
