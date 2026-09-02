// ══════════════════════════════════════════════════════════════════════════════
//  BiblioGest — Lógica de la aplicación
//  Sistema de préstamo bibliotecario
// ══════════════════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════════════════
//  ICONOS (SVG en línea, estilo Lucide — licencia MIT)
// ══════════════════════════════════════════════════════════════════════════════
const ICONOS = {
  ojo:            '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  'ojo-cerrado':  '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
  buscar:         '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  alerta:         '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'alerta-circulo':'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  etiqueta:       '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  candado:        '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'libro-abierto':'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  libro:          '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
  'libro-mas':    '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M9 10h6"/><path d="M12 7v6"/>',
  biblioteca:     '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  editar:         '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
  lapiz:          '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  basura:         '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  recibo:         '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  impresora:      '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
  engrane:        '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'flecha-izq':   '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  palomita:       '<path d="M20 6 9 17l-5-5"/>',
  'check-circulo':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  ciclo:          '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  usuarios:       '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  usuario:        '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'usuario-mas':  '<path d="M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
  bandeja:        '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  portapapeles:   '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  calendario:     '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'calendario-check':'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  reloj:          '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  numeral:        '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
  pergamino:      '<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
  destellos:      '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  carita:         '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
  birrete:        '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  columnas:       '<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
  estrella:       '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  corazon:        '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  globo:          '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
};

const ICONOS_GENERO = [
  { clave: 'libro',          etiqueta: 'Libro' },
  { clave: 'libro-abierto',  etiqueta: 'Libro abierto' },
  { clave: 'pergamino',      etiqueta: 'Pergamino' },
  { clave: 'destellos',      etiqueta: 'Destellos' },
  { clave: 'estrella',       etiqueta: 'Estrella' },
  { clave: 'corazon',        etiqueta: 'Corazón' },
  { clave: 'globo',          etiqueta: 'Mundo' },
  { clave: 'birrete',        etiqueta: 'Educativo' },
  { clave: 'columnas',       etiqueta: 'Historia' },
  { clave: 'carita',         etiqueta: 'Infantil' }
];

function ico(nombre, clase) {
  const trazos = ICONOS[nombre] || ICONOS.libro;
  return '<span class="ico' + (clase ? ' ' + clase : '') + '" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round">' + trazos + '</svg></span>';
}

function hidratarIconos(raiz) {
  (raiz || document).querySelectorAll('[data-ico]').forEach(el => {
    if (el.dataset.icoListo) return;
    el.innerHTML = ico(el.dataset.ico);
    el.dataset.icoListo = '1';
  });
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ══════════════════════════════════════════════════════════════════════════════
//  BASE DE DATOS COMPARTIDA (Firebase Firestore)
// ══════════════════════════════════════════════════════════════════════════════
const DB_REF = db.collection('bibliogest').doc('data');

let DB = null;
let dbListo = false;
let usuarioActual = null;
let libroSeleccionado = null;
let diasPrestamo = 7;
let filtroGeneroActual = 'todos';
let prestamoADevolver = null;

const GENEROS_DEFECTO = ['Novela','Clásico','Infantil','Fantasía','Misterio','Educativo','Historia','Ciencia ficción','Otro'];
const ICONOS_GENERO_DEFECTO = {
  'Novela':'libro-abierto', 'Clásico':'pergamino', 'Infantil':'carita',
  'Fantasía':'destellos', 'Misterio':'globo', 'Educativo':'birrete',
  'Historia':'columnas', 'Ciencia ficción':'estrella', 'Otro':'libro'
};

function estructuraVacia() {
  const libros = (SEED.libros || []).map(l => ({
    ...l, total: (typeof l.total === 'number' && l.total > 0) ? l.total : 1
  }));
  const maxId = libros.reduce((m, l) => Math.max(m, l.id || 0), 0);
  return {
    libros,
    usuarios: (SEED.usuarios || []).map(u => ({ ...u })),
    admins:   (SEED.admins   || []).map(a => ({ ...a })),
    prestamos: [], revision: [],
    generos: (Array.isArray(SEED.generos) && SEED.generos.length) ? [...SEED.generos] : [...GENEROS_DEFECTO],
    generoIconos: SEED.generoIconos ? { ...SEED.generoIconos } : { ...ICONOS_GENERO_DEFECTO },
    _nextLibroId: maxId + 1,
    _nextUsuarioId: (SEED.usuarios || []).length + 1,
    _nextPrestamoId: 1, _nextRevisionId: 1
  };
}

function migrarEstructura() {
  if (!DB.revision) DB.revision = [];
  if (!DB._nextRevisionId) DB._nextRevisionId = 1;
  DB.libros.forEach(l => { if (typeof l.total !== 'number' || l.total < 1) l.total = 1; });
  if (!Array.isArray(DB.generos) || !DB.generos.length) {
    const usados = DB.libros.map(l => l.genero).filter(Boolean);
    DB.generos = [...new Set([...GENEROS_DEFECTO, ...usados])];
  }
  if (!DB.generoIconos || typeof DB.generoIconos !== 'object') DB.generoIconos = {};
  DB.generos.forEach(g => { if (!DB.generoIconos[g]) DB.generoIconos[g] = ICONOS_GENERO_DEFECTO[g] || 'libro'; });
  DB.usuarios.forEach(u => {
    if (typeof u.autorizado !== 'number') u.autorizado = u.activo ? 1 : 0;
  });
}

async function iniciarBaseDeDatos() {
  try {
    await firebase.auth().signInAnonymously();
  } catch (e) {
    mostrarErrorConexion(e);
    return;
  }
  DB_REF.onSnapshot(async (snap) => {
    if (!snap.exists) {
      const inicial = estructuraVacia();
      try { await DB_REF.set(inicial); } catch (e) { mostrarErrorConexion(e); }
      return;
    }
    DB = snap.data();
    migrarEstructura();
    if (!dbListo) {
      dbListo = true;
      ocultarCargando();
      hidratarIconos();
      limpiarCamposSensibles();
      mostrarPantalla('login');
    } else {
      sincronizarSesionActiva();
      refrescarVistaActual();
    }
  }, (error) => { mostrarErrorConexion(error); });
}

async function guardarDB() {
  if (!DB) return;
  try { await DB_REF.set(DB); } catch (e) { mostrarErrorConexion(e); }
}

function mostrarErrorConexion(e) {
  console.error('Error de Firestore:', e);
  toast('No se pudo conectar a la base de datos. Revisa tu internet o la configuración de Firebase.', 'error');
}
function ocultarCargando() { const el = document.getElementById('pantalla-cargando'); if (el) el.remove(); }

function sincronizarSesionActiva() {
  if (!usuarioActual) return;
  const fresco = DB.usuarios.find(u => u.id === usuarioActual.id);
  if (!fresco) {
    usuarioActual = null; limpiarCamposSensibles(); mostrarPantalla('login');
    toast('Tu cuenta ya no está registrada. Sesión cerrada.', 'error'); return;
  }
  if (!fresco.activo) {
    usuarioActual = null; limpiarCamposSensibles(); mostrarPantalla('login');
    toast('Tu cuenta fue desactivada. Contacta al encargado.', 'error'); return;
  }
  usuarioActual = fresco;
  const nom = document.getElementById('nombre-usuario');
  const av  = document.getElementById('avatar-usuario');
  if (nom) nom.textContent = nombreCompleto(fresco);
  if (av)  av.textContent  = fresco.nombre.trim().charAt(0).toUpperCase();
}

function refrescarVistaActual() {
  if (document.getElementById('pantalla-usuario')?.classList.contains('activa')) {
    if (document.getElementById('tab-catalogo')?.classList.contains('activo')) renderCatalogo();
    else if (document.getElementById('tab-prestamos')?.classList.contains('activo')) renderMisPrestamos();
    else if (document.getElementById('tab-historial')?.classList.contains('activo')) renderHistorial();
  } else if (document.getElementById('pantalla-admin')?.classList.contains('activa')) {
    if (document.getElementById('tab-dashboard')?.classList.contains('activo')) renderDashboard();
    else if (document.getElementById('tab-prestamos-admin')?.classList.contains('activo')) renderTablaPrestamoAdmin();
    else if (document.getElementById('tab-revision')?.classList.contains('activo')) renderRevision();
    else if (document.getElementById('tab-inventario')?.classList.contains('activo')) renderInventario();
    else if (document.getElementById('tab-usuarios-admin')?.classList.contains('activo')) renderUsuariosAdmin();
  }
}

// ══════════════════════════════════════════════════════════════════════════════
//  AUTH — teléfono + contraseña, con nombre dividido y autorización manual
// ══════════════════════════════════════════════════════════════════════════════
function soloDigitos(s) { return String(s || '').replace(/\D/g, ''); }
function formatTelefono(s) {
  const d = soloDigitos(s);
  return d.length === 10 ? d.slice(0,3) + ' ' + d.slice(3,6) + ' ' + d.slice(6) : (s || '—');
}
function nombreCompleto(u) {
  return [u.nombre, u.apellidoPaterno, u.apellidoMaterno].filter(Boolean).join(' ');
}

function revisarPassword(pass) {
  const p = String(pass || '');
  return {
    largo:  p.length >= 8,
    mayus:  /[A-ZÁÉÍÓÚÑ]/.test(p),
    numero: /[0-9]/.test(p),
    simple: p.length > 0 && /^[A-Za-zÁÉÍÓÚÑáéíóúñ0-9]+$/.test(p)
  };
}
function passwordValida(pass) { return Object.values(revisarPassword(pass)).every(Boolean); }

function evaluarPassword() {
  const r = revisarPassword(document.getElementById('reg-pass').value);
  const lista = document.getElementById('reglas-pass');
  if (!lista) return;
  lista.querySelectorAll('li').forEach(li => {
    const ok = r[li.dataset.regla];
    li.classList.toggle('cumplida', !!ok);
    li.querySelector('.regla-ico').innerHTML = ok ? ico('palomita') : '';
  });
}

async function hacerLogin() {
  const tel  = soloDigitos(document.getElementById('login-telefono').value);
  const pass = document.getElementById('login-pass').value;
  if (!tel || !pass) { toast('Completa todos los campos', 'error'); return; }
  if (tel.length !== 10) { toast('El teléfono debe tener 10 dígitos', 'error'); return; }
  const hash = await sha256(pass);
  const usuario = DB.usuarios.find(u => soloDigitos(u.telefono) === tel && u.password === hash);
  if (!usuario) { toast('Teléfono o contraseña incorrectos', 'error'); return; }
  if (!usuario.autorizado) {
    toast('Tu cuenta está pendiente de autorización. Acude con el encargado de la biblioteca.', 'error');
    return;
  }
  if (!usuario.activo) { toast('Tu cuenta está desactivada. Acude con el encargado.', 'error'); return; }
  usuarioActual = usuario;
  iniciarSesionUsuario();
}

function iniciarSesionUsuario() {
  document.getElementById('nombre-usuario').textContent = nombreCompleto(usuarioActual);
  document.getElementById('avatar-usuario').textContent = usuarioActual.nombre.trim().charAt(0).toUpperCase();
  mostrarPantalla('usuario');
  cambiarTab('catalogo');
  toast('Bienvenido, ' + usuarioActual.nombre, 'exito');
}

async function hacerRegistro() {
  const nombre    = document.getElementById('reg-nombre').value.trim().replace(/\s+/g, ' ');
  const apPaterno = document.getElementById('reg-apellido-paterno').value.trim().replace(/\s+/g, ' ');
  const apMaterno = document.getElementById('reg-apellido-materno').value.trim().replace(/\s+/g, ' ');
  const tel    = soloDigitos(document.getElementById('reg-telefono').value);
  const pass   = document.getElementById('reg-pass').value;
  const pass2  = document.getElementById('reg-pass2').value;
  const menor  = document.getElementById('reg-menor').checked;

  if (!nombre || !apPaterno || !tel || !pass) { toast('Completa los campos obligatorios', 'error'); return; }
  const soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ' .-]+$/;
  if (!soloLetras.test(nombre) || !soloLetras.test(apPaterno) || (apMaterno && !soloLetras.test(apMaterno))) {
    toast('El nombre y los apellidos solo pueden llevar letras', 'error'); return;
  }
  if (tel.length !== 10) { toast('El teléfono debe tener exactamente 10 dígitos', 'error'); return; }
  if (DB.usuarios.find(u => soloDigitos(u.telefono) === tel)) {
    toast('Ese número de teléfono ya está registrado', 'error'); return;
  }
  const r = revisarPassword(pass);
  if (!r.largo)  { toast('La contraseña debe tener al menos 8 caracteres', 'error'); return; }
  if (!r.mayus)  { toast('La contraseña necesita al menos una letra mayúscula', 'error'); return; }
  if (!r.numero) { toast('La contraseña necesita al menos un número', 'error'); return; }
  if (!r.simple) { toast('La contraseña solo puede llevar letras y números, sin símbolos', 'error'); return; }
  if (pass !== pass2) { toast('Las contraseñas no coinciden', 'error'); return; }

  const hash = await sha256(pass);
  const nuevo = {
    id: DB._nextUsuarioId++, nombre, apellidoPaterno: apPaterno, apellidoMaterno: apMaterno || null,
    telefono: tel, password: hash, es_menor: menor ? 1 : 0, fecha_reg: fechaLocal(),
    activo: 0, autorizado: 0
  };
  DB.usuarios.push(nuevo);
  guardarDB();
  limpiarCamposSensibles();
  mostrarPantalla('login');
  toast('Cuenta creada. Un administrador debe autorizar tu acceso antes de que puedas entrar.', 'info');
}

// ══════════════════════════════════════════════════════════════════════════════
//  HELPERS GENERALES
// ══════════════════════════════════════════════════════════════════════════════
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');
}
function fechaLocal() {
  const d = new Date();
  const p = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}
function formatFecha(f) {
  if (!f) return '—';
  return String(f).slice(0,10);
}
function diasRestantes(fechaLimite) {
  const hoy = new Date(fechaLocal().slice(0,10));
  const lim = new Date(String(fechaLimite).slice(0,10));
  return Math.round((lim - hoy) / 86400000);
}
function estadoBadge(estado, fechaLimite, fechaDevolucion) {
  if (fechaDevolucion) return '<span class="badge badge-verde">' + ico('palomita') + ' Devuelto</span>';
  if (diasRestantes(fechaLimite) < 0) return '<span class="badge badge-rojo">' + ico('alerta-circulo') + ' Vencido</span>';
  return '<span class="badge badge-amarillo">' + ico('reloj') + ' Por vencer</span>';
}
function toast(msg, tipo) {
  const cont = document.getElementById('toast-container');
  if (!cont) return;
  const el = document.createElement('div');
  el.className = 'toast toast-' + (tipo || 'info');
  el.textContent = msg;
  cont.appendChild(el);
  requestAnimationFrame(() => el.classList.add('mostrar'));
  setTimeout(() => { el.classList.remove('mostrar'); setTimeout(() => el.remove(), 300); }, 3800);
}

// ══════════════════════════════════════════════════════════════════════════════
//  NAVEGACIÓN
// ══════════════════════════════════════════════════════════════════════════════
function mostrarPantalla(nombre) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  const el = document.getElementById('pantalla-' + nombre);
  if (el) el.classList.add('activa');
}
function cambiarTab(nombre) {
  document.querySelectorAll('#pantalla-usuario .tab-panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('#pantalla-usuario .nav-btn').forEach(b => b.classList.remove('activo'));
  document.getElementById('tab-' + nombre)?.classList.add('activo');
  document.querySelector('#pantalla-usuario .nav-btn[data-tab="' + nombre + '"]')?.classList.add('activo');
  if (nombre === 'catalogo') renderCatalogo();
  if (nombre === 'prestamos') renderMisPrestamos();
  if (nombre === 'historial') reiniciarPaginaHistorial();
}
function cambiarTabAdmin(nombre) {
  document.querySelectorAll('#pantalla-admin .tab-panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('#pantalla-admin .nav-btn').forEach(b => b.classList.remove('activo'));
  document.getElementById('tab-' + nombre)?.classList.add('activo');
  document.querySelector('#pantalla-admin .nav-btn[data-tab="' + nombre + '"]')?.classList.add('activo');
  if (nombre === 'dashboard') renderDashboard();
  if (nombre === 'prestamos-admin') reiniciarPaginaPrestamos();
  if (nombre === 'revision') renderRevision();
  if (nombre === 'inventario') renderInventario();
  if (nombre === 'usuarios-admin') renderUsuariosAdmin();
}
function abrirModal(id) { document.getElementById(id)?.classList.add('activo'); }
function cerrarModal(id) { document.getElementById(id)?.classList.remove('activo'); }
function abrirLoginAdmin() { abrirModal('modal-login-admin'); }

function cerrarSesion() { usuarioActual = null; limpiarCamposSensibles(); mostrarPantalla('login'); }
function cerrarSesionAdmin() { limpiarCamposSensibles(); mostrarPantalla('login'); }

async function hacerLoginAdmin() {
  const user = document.getElementById('adm-user').value.trim();
  const pass = document.getElementById('adm-pass').value;
  if (!user || !pass) { toast('Completa todos los campos', 'error'); return; }
  const hash = await sha256(pass);
  const admin = DB.admins.find(a => a.usuario === user && a.password === hash);
  if (!admin) { toast('Usuario o contraseña incorrectos', 'error'); return; }
  cerrarModal('modal-login-admin');
  limpiarCamposSensibles();
  mostrarPantalla('admin');
  cambiarTabAdmin('dashboard');
}

async function cambiarPasswordAdmin() {
  const actual = document.getElementById('cfg-pass-actual').value;
  const nueva  = document.getElementById('cfg-pass-nueva').value;
  const conf   = document.getElementById('cfg-pass-conf').value;
  if (!actual || !nueva || !conf) { toast('Completa todos los campos', 'error'); return; }
  const admin = DB.admins[0];
  const hashActual = await sha256(actual);
  if (admin.password !== hashActual) { toast('Contraseña actual incorrecta', 'error'); return; }
  if (!passwordValida(nueva)) { toast('La nueva contraseña necesita 8+ caracteres, una mayúscula y un número, sin símbolos', 'error'); return; }
  if (nueva !== conf) { toast('Las contraseñas no coinciden', 'error'); return; }
  admin.password = await sha256(nueva);
  guardarDB();
  ['cfg-pass-actual','cfg-pass-nueva','cfg-pass-conf'].forEach(id => document.getElementById(id).value = '');
  toast('Contraseña actualizada', 'exito');
}

// ══════════════════════════════════════════════════════════════════════════════
//  MOSTRAR / OCULTAR CONTRASEÑA Y LIMPIEZA DE CAMPOS
// ══════════════════════════════════════════════════════════════════════════════
function toggleVerPassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const oculto = input.type === 'password';
  input.type = oculto ? 'text' : 'password';
  btn.innerHTML = ico(oculto ? 'ojo-cerrado' : 'ojo');
  btn.setAttribute('title', oculto ? 'Ocultar contraseña' : 'Mostrar contraseña');
  input.focus();
}

function limpiarCamposSensibles() {
  const ids = ['login-telefono','login-pass','adm-user','adm-pass',
               'reg-nombre','reg-apellido-paterno','reg-apellido-materno','reg-telefono','reg-pass','reg-pass2',
               'cfg-pass-actual','cfg-pass-nueva','cfg-pass-conf',
               'eu-password'];
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const menor = document.getElementById('reg-menor');
  if (menor) menor.checked = false;
  document.querySelectorAll('.toggle-pass').forEach(btn => {
    const input = document.getElementById(btn.dataset.target);
    if (input) input.type = 'password';
    btn.innerHTML = ico('ojo');
  });
  const lista = document.getElementById('reglas-pass');
  if (lista) lista.querySelectorAll('li').forEach(li => {
    li.classList.remove('cumplida');
    li.querySelector('.regla-ico').innerHTML = '';
  });
}

// ══════════════════════════════════════════════════════════════════════════════
//  EXISTENCIAS
// ══════════════════════════════════════════════════════════════════════════════
function copiasTotales(libro)    { return (typeof libro.total === 'number' && libro.total > 0) ? libro.total : 1; }
function copiasPrestadas(libro)  { return DB.prestamos.filter(p => p.libro_id === libro.id && !p.fecha_devolucion).length; }
function copiasEnRevision(libro) { return DB.revision.filter(r => r.libro_id === libro.id).length; }
function copiasDisponibles(libro) {
  return Math.max(0, copiasTotales(libro) - copiasPrestadas(libro) - copiasEnRevision(libro));
}
function datosIncompletos(libro) { return !libro.editorial || !libro.anio; }

// ══════════════════════════════════════════════════════════════════════════════
//  CATÁLOGO DE GÉNEROS
// ══════════════════════════════════════════════════════════════════════════════
function listaGeneros() {
  return Array.isArray(DB?.generos) && DB.generos.length ? DB.generos : [...GENEROS_DEFECTO];
}
function poblarSelectGeneros(selectId, valorSeleccionado) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const generos = listaGeneros();
  sel.innerHTML = generos.map(g => '<option value="' + escapeHtml(g) + '">' + escapeHtml(g) + '</option>').join('');
  if (valorSeleccionado && !generos.includes(valorSeleccionado)) {
    sel.innerHTML += '<option value="' + escapeHtml(valorSeleccionado) + '">' + escapeHtml(valorSeleccionado) + '</option>';
  }
  if (valorSeleccionado) sel.value = valorSeleccionado;
}
function generoIcono(genero) {
  return (DB?.generoIconos && DB.generoIconos[genero]) || ICONOS_GENERO_DEFECTO[genero] || 'libro';
}
const PALETA_GENERO = {
  'Literatura':          { bg:'#FDE8D8', ico:'#B5651D' },
  'Cuentos':             { bg:'#F5EED8', ico:'#8A6D1F' },
  'Infantil y juvenil':  { bg:'#D8F0E8', ico:'#1F7A5C' },
  'Historia':            { bg:'#E8E0F5', ico:'#5B3E9B' },
  'Ciencia':             { bg:'#D8E8F5', ico:'#1F5B8A' },
  'Ingeniería':          { bg:'#E4E7EA', ico:'#455A64' },
  'Derecho':             { bg:'#F5D8D8', ico:'#9E2A2B' },
  'Economía y negocios': { bg:'#E8F5D8', ico:'#4A7A1F' },
  'Referencia':          { bg:'#F0E6DC', ico:'#7A5C3E' },
  'Otro':                { bg:'#EEEAE5', ico:'#6B6B6B' },
  'Novela':'#FDE8D8', 'Clásico':'#E8E0F5', 'Infantil':'#D8F0E8',
  'Fantasía':'#D8E8F5', 'Misterio':'#F5D8D8', 'Educativo':'#E8F5D8'
};
function paletaDe(genero) {
  const p = PALETA_GENERO[genero];
  if (!p) return { bg:'#EEEAE5', ico:'#6B6B6B' };
  return typeof p === 'string' ? { bg:p, ico:'#6B6B6B' } : p;
}
function generoBg(genero)    { return paletaDe(genero).bg; }
function generoColor(genero) { return paletaDe(genero).ico; }

// ══════════════════════════════════════════════════════════════════════════════
//  CATÁLOGO (vista usuario)
// ══════════════════════════════════════════════════════════════════════════════
function filtrarGenero(g) { filtroGeneroActual = g; renderCatalogo(); }

function renderCatalogo() {
  const contFiltros = document.getElementById('filtro-generos');
  const generos = ['todos', ...listaGeneros().filter(g => DB.libros.some(l => l.genero === g))];
  contFiltros.innerHTML = generos.map(g =>
    '<span class="filtro-chip ' + (g === filtroGeneroActual ? 'activo' : '') + '" onclick="filtrarGenero(\'' + g + '\')">' +
    (g === 'todos' ? 'Todos' : escapeHtml(g)) + '</span>'
  ).join('');

  const q = (document.getElementById('busqueda-catalogo')?.value || '').toLowerCase();
  let libros = DB.libros;
  if (filtroGeneroActual !== 'todos') libros = libros.filter(l => l.genero === filtroGeneroActual);
  if (q) libros = libros.filter(l => (l.titulo||'').toLowerCase().includes(q) || (l.autor||'').toLowerCase().includes(q));
  libros = [...libros].sort((a,b) => a.titulo.localeCompare(b.titulo, 'es', {sensitivity:'base'}));

  const grid = document.getElementById('libros-grid');
  if (!libros.length) {
    grid.innerHTML = '<div class="vacio"><span class="vacio-icono">' + ico('bandeja') + '</span><h3>Sin resultados</h3></div>';
    return;
  }
  grid.innerHTML = libros.map(l => {
    const disp  = copiasDisponibles(l);
    const total = copiasTotales(l);
    return `
    <div class="libro-card" onclick="abrirModalPrestamo(${l.id})">
      <div class="libro-portada">
        <div class="libro-portada-bg" style="background:${generoBg(l.genero)}"></div>
        <span class="libro-portada-ico" style="color:${generoColor(l.genero)}">${ico(generoIcono(l.genero))}</span>
        ${total > 1 ? `<span class="libro-existencias">${disp}/${total}</span>` : ''}
      </div>
      <div class="libro-info">
        <div class="libro-titulo">${escapeHtml(l.titulo)}</div>
        <div class="libro-autor">${escapeHtml(l.autor)}</div>
        <div class="libro-footer">
          <span class="badge ${disp > 0 ? 'badge-verde' : 'badge-rojo'}">${disp > 0 ? '● ' + disp + ' disponible' + (disp>1?'s':'') : '● No disponible'}</span>
          <span style="font-size:12px;color:var(--gris-medio)">${l.anio||''}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════════════════════════
//  PRÉSTAMOS (vista usuario)
// ══════════════════════════════════════════════════════════════════════════════
function abrirModalPrestamo(libroId) {
  const libro = DB.libros.find(l => l.id === libroId);
  if (!libro) return;
  const disp = copiasDisponibles(libro);
  if (disp <= 0) { toast('No quedan ejemplares disponibles de este libro', 'error'); return; }
  libroSeleccionado = libro;
  diasPrestamo = 7;
  document.querySelectorAll('.dia-btn').forEach(b => b.classList.remove('seleccionado'));
  document.querySelector('.dia-btn').classList.add('seleccionado');
  document.getElementById('modal-prestamo-libro-info').innerHTML =
    '<strong style="font-family:\'Playfair Display\',serif;font-size:16px">' + escapeHtml(libro.titulo) + '</strong><br>' +
    '<span style="color:var(--gris-medio);font-size:14px">' + escapeHtml(libro.autor) + ' · ' + escapeHtml(libro.genero) + '</span><br>' +
    '<span style="color:var(--gris-medio);font-size:13px">Ejemplares disponibles: <strong>' + disp + '</strong> de ' + copiasTotales(libro) + '</span>';
  actualizarResumenPrestamo();
  abrirModal('modal-prestamo');
}
function seleccionarDias(dias, btn) {
  diasPrestamo = dias;
  document.querySelectorAll('.dia-btn').forEach(b => b.classList.remove('seleccionado'));
  btn.classList.add('seleccionado');
  actualizarResumenPrestamo();
}
function actualizarResumenPrestamo() {
  const hoy = new Date();
  const limite = new Date(hoy); limite.setDate(limite.getDate() + diasPrestamo);
  const f = d => d.toLocaleDateString('es-MX');
  document.getElementById('resumen-prestamo').innerHTML =
    '<div class="comp-fila"><span>Fecha de préstamo</span><span>' + f(hoy) + '</span></div>' +
    '<div class="comp-fila"><span>Fecha límite de devolución</span><span>' + f(limite) + '</span></div>' +
    '<div class="comp-fila"><span>Duración</span><span>' + diasPrestamo + ' días</span></div>';
}

async function confirmarPrestamo() {
  if (!libroSeleccionado || !usuarioActual) return;
  const libro = DB.libros.find(l => l.id === libroSeleccionado.id);
  if (!libro) {
    toast('Este libro ya no existe en el catálogo', 'error');
    cerrarModal('modal-prestamo'); renderCatalogo(); return;
  }
  libroSeleccionado = libro;
  const yaActivo = DB.prestamos.find(p => p.usuario_id===usuarioActual.id && p.libro_id===libro.id && !p.fecha_devolucion);
  if (yaActivo) { toast('Ya tienes este libro en préstamo', 'error'); return; }
  if (copiasDisponibles(libro) <= 0) {
    toast('Alguien acaba de apartar el último ejemplar disponible', 'error');
    cerrarModal('modal-prestamo'); renderCatalogo(); return;
  }
  const fechaPrestamo = fechaLocal();
  const limite = new Date(); limite.setDate(limite.getDate() + diasPrestamo);
  const p = n => String(n).padStart(2,'0');
  const fechaLimite = `${limite.getFullYear()}-${p(limite.getMonth()+1)}-${p(limite.getDate())} 23:59:59`;

  const prestamo = {
    id: DB._nextPrestamoId++, usuario_id: usuarioActual.id, libro_id: libro.id,
    fecha_prestamo: fechaPrestamo, fecha_limite: fechaLimite, fecha_devolucion: null, estado: 'activo'
  };
  DB.prestamos.push(prestamo);
  guardarDB();
  cerrarModal('modal-prestamo');
  renderCatalogo();
  toast('Préstamo registrado', 'exito');
  imprimirComprobante(prestamo, libro, usuarioActual);
}

function renderMisPrestamos() {
  const mios = DB.prestamos.filter(p => p.usuario_id === usuarioActual.id && !p.fecha_devolucion);
  const cont = document.getElementById('lista-mis-prestamos');
  if (!mios.length) {
    cont.innerHTML = '<div class="vacio"><span class="vacio-icono">' + ico('bandeja') + '</span><h3>Sin préstamos activos</h3><p>Explora el catálogo para pedir un libro</p></div>';
    return;
  }
  cont.innerHTML = [...mios].reverse().map(p => {
    const libro = DB.libros.find(l => l.id === p.libro_id);
    const dias = diasRestantes(p.fecha_limite);
    return `<div class="prestamo-card">
      <span class="prestamo-icono">${ico(generoIcono(libro?.genero))}</span>
      <div style="flex:1">
        <div class="revision-titulo">${escapeHtml(libro?.titulo || 'Libro N/A')}</div>
        <div class="revision-meta">
          <span>${ico('lapiz')} <strong>${escapeHtml(libro?.autor||'—')}</strong></span>
          <span>${ico('calendario')} Límite: <strong>${formatFecha(p.fecha_limite)}</strong></span>
        </div>
      </div>
      <div style="text-align:right">
        ${estadoBadge(p.estado, p.fecha_limite, p.fecha_devolucion)}
        <br><button class="btn btn-secundario btn-sm" style="margin-top:8px" onclick="abrirConfirmarDevolucion(${p.id})">Devolver</button>
      </div>
    </div>`;
  }).join('');
}

function abrirConfirmarDevolucion(prestamoId) {
  const p = DB.prestamos.find(x => x.id === prestamoId);
  if (!p) return;
  const libro = DB.libros.find(l => l.id === p.libro_id);
  prestamoADevolver = prestamoId;
  document.getElementById('devolucion-libro-nombre').innerHTML =
    '¿Confirmas la devolución de <strong>' + escapeHtml(libro?.titulo||'este libro') + '</strong>?';
  abrirModal('modal-confirmar-devolucion');
}
function confirmarDevolucionDesdeModal() {
  if (prestamoADevolver) devolverLibro(prestamoADevolver);
  cerrarModal('modal-confirmar-devolucion');
  prestamoADevolver = null;
}

function devolverLibro(prestamoId) {
  const p = DB.prestamos.find(x => x.id === prestamoId);
  if (!p) return;
  p.fecha_devolucion = fechaLocal();
  p.estado = 'devuelto';
  DB.revision.push({ id: DB._nextRevisionId++, libro_id: p.libro_id, prestamo_id: p.id, usuario_id: p.usuario_id, fecha_devolucion: p.fecha_devolucion });
  guardarDB();
  renderMisPrestamos();
  toast('Devolución registrada. Un administrador revisará el libro antes de que vuelva a estar disponible.', 'exito');
}

function adminDevolverLibro(prestamoId) { devolverLibro(prestamoId); renderTablaPrestamoAdmin(); }

// ══════════════════════════════════════════════════════════════════════════════
//  REVISIÓN (admin)
// ══════════════════════════════════════════════════════════════════════════════
function renderRevision() {
  const cont = document.getElementById('revision-lista');
  if (!DB.revision.length) {
    cont.innerHTML = '<div class="vacio"><span class="vacio-icono">' + ico('check-circulo') + '</span><h3>Sin libros pendientes</h3></div>';
    return;
  }
  cont.innerHTML = DB.revision.map(r => {
    const libro = DB.libros.find(l => l.id===r.libro_id);
    const usuario = DB.usuarios.find(u => u.id===r.usuario_id);
    return `<div class="revision-card">
      <div>${ico(generoIcono(libro?.genero))}</div>
      <div style="flex:1">
        <div class="revision-titulo">${escapeHtml(libro?.titulo||'Libro N/A')}</div>
        <div class="revision-meta">
          <span>${ico('lapiz')} <strong>${escapeHtml(libro?.autor||'—')}</strong></span>
          <span>${ico('etiqueta')} <strong>${escapeHtml(libro?.genero||'—')}</strong></span>
          <span>${ico('numeral')} Código: <strong>${escapeHtml(libro?.codigo||'—')}</strong></span>
        </div>
        <div class="revision-meta">
          <span>${ico('usuario')} Devuelto por: <strong>${escapeHtml(usuario?nombreCompleto(usuario):'N/A')}</strong></span>
          <span>${ico('calendario-check')} Fecha devolución: <strong>${formatFecha(r.fecha_devolucion)}</strong></span>
        </div>
      </div>
      <button class="btn btn-verde btn-sm" onclick="marcarRevisado(${r.id})">${ico('palomita')} Revisado</button>
    </div>`;
  }).join('');
}
function marcarRevisado(revisionId) {
  const r = DB.revision.find(x => x.id===revisionId);
  if (!r) return;
  const libro = DB.libros.find(l => l.id===r.libro_id);
  DB.revision = DB.revision.filter(x => x.id!==revisionId);
  guardarDB();
  toast('"' + (libro?.titulo||'Libro') + '" ya está disponible en el catálogo', 'exito');
}

// ══════════════════════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
function renderDashboard() {
  const titulos          = DB.libros.length;
  const totalLibros      = DB.libros.reduce((s, l) => s + copiasTotales(l), 0);
  const disponibles      = DB.libros.reduce((s, l) => s + copiasDisponibles(l), 0);
  const prestamosActivos = DB.prestamos.filter(p => !p.fecha_devolucion).length;
  const usuariosActivos  = DB.usuarios.filter(u => u.activo).length;
  const enRevision       = DB.revision.length;
  const pendientes       = DB.usuarios.filter(u => !u.autorizado).length;

  document.getElementById('stats-grid').innerHTML =
    '<div class="stat-card stat-rojo"><div class="stat-icono">' + ico('biblioteca') + '</div><div class="stat-valor">' + totalLibros + '</div><div class="stat-label">Ejemplares totales (' + titulos + ' títulos)</div></div>' +
    '<div class="stat-card stat-verde"><div class="stat-icono">' + ico('check-circulo') + '</div><div class="stat-valor">' + disponibles + '</div><div class="stat-label">Disponibles ahora</div></div>' +
    '<div class="stat-card stat-azul"><div class="stat-icono">' + ico('ciclo') + '</div><div class="stat-valor">' + prestamosActivos + '</div><div class="stat-label">Préstamos activos</div></div>' +
    '<div class="stat-card stat-naranja"><div class="stat-icono">' + ico('buscar') + '</div><div class="stat-valor">' + enRevision + '</div><div class="stat-label">En revisión</div></div>' +
    '<div class="stat-card stat-cafe"><div class="stat-icono">' + ico('usuarios') + '</div><div class="stat-valor">' + usuariosActivos + '</div><div class="stat-label">Usuarios activos</div></div>' +
    (pendientes > 0 ? '<div class="stat-card stat-pendiente"><div class="stat-icono">' + ico('usuario-mas') + '</div><div class="stat-valor">' + pendientes + '</div><div class="stat-label">Solicitudes pendientes</div></div>' : '');

  const recientes = [...DB.prestamos].reverse().slice(0, 8);
  const cont = document.getElementById('prestamos-recientes');
  if (!recientes.length) { cont.innerHTML = '<div class="vacio" style="padding:24px"><p>Sin préstamos todavía</p></div>'; return; }
  cont.innerHTML = '<div class="admin-tabla-caja"><table class="admin-tabla"><thead><tr><th>Usuario</th><th>Libro</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>' +
    recientes.map(p => {
      const u = DB.usuarios.find(x => x.id===p.usuario_id);
      const l = DB.libros.find(x => x.id===p.libro_id);
      return '<tr><td>' + escapeHtml(u?nombreCompleto(u):'N/A') + '</td><td>' + escapeHtml(l?.titulo||'N/A') + '</td><td>' + formatFecha(p.fecha_prestamo) + '</td><td>' + estadoBadge(p.estado,p.fecha_limite,p.fecha_devolucion) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}

// ══════════════════════════════════════════════════════════════════════════════
//  INVENTARIO (admin)
// ══════════════════════════════════════════════════════════════════════════════
const comparadorEs = new Intl.Collator('es', { sensitivity: 'base', numeric: true });
function cmpTexto(a, b) { return comparadorEs.compare(a || '', b || ''); }

function ordenarLibros(libros, criterio) {
  const copia = [...libros];
  switch (criterio) {
    case 'titulo-desc': return copia.sort((a, b) => cmpTexto(b.titulo, a.titulo));
    case 'autor-asc':   return copia.sort((a, b) => cmpTexto(a.autor, b.autor) || cmpTexto(a.titulo, b.titulo));
    case 'anio-desc':   return copia.sort((a, b) => (parseInt(b.anio,10)||0) - (parseInt(a.anio,10)||0) || cmpTexto(a.titulo, b.titulo));
    case 'anio-asc':    return copia.sort((a, b) => (parseInt(a.anio,10)||9999) - (parseInt(b.anio,10)||9999) || cmpTexto(a.titulo, b.titulo));
    case 'codigo-asc':  return copia.sort((a, b) => cmpTexto(a.codigo, b.codigo));
    case 'codigo-desc': return copia.sort((a, b) => cmpTexto(b.codigo, a.codigo));
    case 'titulo-asc':
    default:            return copia.sort((a, b) => cmpTexto(a.titulo, b.titulo));
  }
}

function renderInventario() {
  const q = (document.getElementById('busqueda-inv')?.value||'').toLowerCase();
  const orden = document.getElementById('orden-inventario')?.value || 'titulo-asc';
  const comp  = document.getElementById('filtro-completitud')?.value || '';
  let libros = DB.libros;
  if (q) libros = libros.filter(l => (l.titulo||'').toLowerCase().includes(q)||(l.autor||'').toLowerCase().includes(q)||(l.codigo||'').toLowerCase().includes(q));
  if (comp === 'incompletos') libros = libros.filter(l => datosIncompletos(l));
  if (comp === 'completos')   libros = libros.filter(l => !datosIncompletos(l));
  libros = ordenarLibros(libros, orden);

  const conteo = document.getElementById('inventario-conteo');
  if (conteo) {
    const ejemplares  = libros.reduce((s, l) => s + copiasTotales(l), 0);
    const incompletos = DB.libros.filter(l => datosIncompletos(l)).length;
    let txt = (q || comp)
      ? libros.length + ' título(s) encontrado(s) de ' + DB.libros.length
      : libros.length + ' título(s) · ' + ejemplares + ' ejemplar(es) en total';
    if (incompletos && !comp) txt += ' · ' + incompletos + ' con datos incompletos';
    conteo.textContent = txt;
  }

  const tbody = document.getElementById('tabla-inventario');
  if (!libros.length) {
    tbody.innerHTML = '<tr><td colspan="8"><div class="vacio" style="padding:30px">' + (q||comp ? 'Ningún libro coincide' : 'Sin libros registrados') + '</div></td></tr>';
    return;
  }
  tbody.innerHTML = libros.map(l => {
    const total  = copiasTotales(l);
    const disp   = copiasDisponibles(l);
    const prest  = copiasPrestadas(l);
    const enRev  = copiasEnRevision(l);
    let estadoHTML;
    if (disp > 0) estadoHTML = '<span class="badge badge-verde">' + disp + ' disponible' + (disp>1?'s':'') + '</span>';
    else if (enRev > 0) estadoHTML = '<span class="badge badge-naranja">' + ico('buscar') + ' En revisión</span>';
    else estadoHTML = '<span class="badge badge-rojo">Sin ejemplares</span>';
    const detalle = [];
    if (prest > 0) detalle.push(prest + ' prestado' + (prest>1?'s':''));
    if (enRev > 0) detalle.push(enRev + ' en revisión');
    return '<tr>' +
      '<td><code style="background:var(--crema-2);padding:2px 6px;border-radius:4px;font-size:12px">' + escapeHtml(l.codigo) + '</code></td>' +
      '<td><strong>' + escapeHtml(l.titulo) + '</strong>' +
        (datosIncompletos(l) ? ' <span class="marca-incompleto" title="Falta editorial y/o año">' + ico('alerta-circulo') + ' Datos incompletos</span>' : '') + '</td>' +
      '<td>' + escapeHtml(l.autor) + '</td>' +
      '<td><span class="badge badge-cafe">' + escapeHtml(l.genero) + '</span></td>' +
      '<td>' + (l.anio||'—') + '</td>' +
      '<td class="celda-existencias">' +
        '<button class="btn-exist" onclick="ajustarExistencias(' + l.id + ',-1)" title="Quitar un ejemplar">−</button>' +
        '<strong class="exist-num">' + total + '</strong>' +
        '<button class="btn-exist" onclick="ajustarExistencias(' + l.id + ',1)" title="Agregar un ejemplar">+</button>' +
      '</td>' +
      '<td>' + estadoHTML + (detalle.length ? '<br><span style="font-size:11px;color:var(--gris-medio)">' + detalle.join(' · ') + '</span>' : '') + '</td>' +
      '<td><button class="btn btn-ghost btn-sm" onclick="abrirEditarLibro(' + l.id + ')" title="Editar">' + ico('editar') + '</button> <button class="btn btn-ghost btn-sm" onclick="abrirEliminarLibro(' + l.id + ')" title="Eliminar">' + ico('basura') + '</button></td>' +
      '</tr>';
  }).join('');
}

function ajustarExistencias(libroId, delta) {
  const l = DB.libros.find(x => x.id === libroId);
  if (!l) return;
  const nuevoTotal = copiasTotales(l) + delta;
  const enUso = copiasPrestadas(l) + copiasEnRevision(l);
  if (nuevoTotal < 1) { toast('Un título debe tener al menos 1 ejemplar', 'error'); return; }
  if (nuevoTotal < enUso) { toast('No puedes bajar a ' + nuevoTotal + ': hay ' + enUso + ' prestado(s) o en revisión', 'error'); return; }
  l.total = nuevoTotal;
  guardarDB();
  renderInventario();
}

function generarCodigoLibro() {
  const max = DB.libros.reduce((m,l) => Math.max(m, parseInt((l.codigo||'').replace(/\D/g,''),10)||0), 0);
  return 'LIB-' + String(max+1).padStart(4,'0');
}

function abrirModalAgregarLibro() {
  ['nl-titulo','nl-autor','nl-editorial','nl-anio'].forEach(id => document.getElementById(id).value='');
  document.getElementById('nl-codigo').value = generarCodigoLibro();
  document.getElementById('nl-total').value = 1;
  poblarSelectGeneros('nl-genero', listaGeneros()[0]);
  abrirModal('modal-agregar-libro');
}
function guardarNuevoLibro() {
  const codigo    = document.getElementById('nl-codigo').value.trim();
  const titulo    = document.getElementById('nl-titulo').value.trim();
  const autor     = document.getElementById('nl-autor').value.trim();
  const editorial = document.getElementById('nl-editorial').value.trim();
  const anio      = document.getElementById('nl-anio').value.trim();
  const genero    = document.getElementById('nl-genero').value;
  const total     = parseInt(document.getElementById('nl-total').value, 10);
  if (!codigo||!titulo||!autor) { toast('Código, título y autor son obligatorios', 'error'); return; }
  if (!Number.isFinite(total) || total < 1) { toast('Las existencias deben ser al menos 1', 'error'); return; }
  DB.libros.push({ id: DB._nextLibroId++, codigo, titulo, autor, editorial:editorial||null, anio:anio||null, genero, total, disponible:1, fecha_alta:fechaLocal(), incompleto: (!editorial||!anio)?1:0 });
  guardarDB();
  cerrarModal('modal-agregar-libro');
  renderInventario();
  toast('Libro "' + titulo + '" agregado (' + total + ' ejemplar' + (total>1?'es':'') + ')', 'exito');
}

function abrirEditarLibro(libroId) {
  const l = DB.libros.find(x => x.id===libroId);
  if (!l) return;
  document.getElementById('el-codigo').value = l.codigo;
  document.getElementById('el-titulo').value = l.titulo;
  document.getElementById('el-autor').value = l.autor;
  document.getElementById('el-editorial').value = l.editorial||'';
  document.getElementById('el-anio').value = l.anio||'';
  poblarSelectGeneros('el-genero', l.genero);
  document.getElementById('el-total').value = copiasTotales(l);
  document.getElementById('el-existencias-info').textContent =
    copiasPrestadas(l) + ' prestado(s) · ' + copiasEnRevision(l) + ' en revisión · ' + copiasDisponibles(l) + ' disponible(s)';
  document.getElementById('modal-editar-libro').dataset.libroId = libroId;
  abrirModal('modal-editar-libro');
}
function guardarEdicionLibro() {
  const libroId = Number(document.getElementById('modal-editar-libro').dataset.libroId);
  const l = DB.libros.find(x => x.id === libroId);
  if (!l) return;
  const codigo    = document.getElementById('el-codigo').value.trim();
  const titulo    = document.getElementById('el-titulo').value.trim();
  const autor     = document.getElementById('el-autor').value.trim();
  const editorial = document.getElementById('el-editorial').value.trim();
  const anio      = document.getElementById('el-anio').value.trim();
  const genero    = document.getElementById('el-genero').value;
  const total     = parseInt(document.getElementById('el-total').value, 10);
  if (!titulo||!autor) { toast('Título y autor son obligatorios', 'error'); return; }
  if (!codigo) { toast('El código es obligatorio', 'error'); return; }
  if (!Number.isFinite(total) || total < 1) { toast('Las existencias deben ser al menos 1', 'error'); return; }
  const enUso = copiasPrestadas(l) + copiasEnRevision(l);
  if (total < enUso) { toast('No puedes poner ' + total + ' ejemplares: hay ' + enUso + ' prestado(s) o en revisión', 'error'); return; }
  l.codigo = codigo; l.titulo = titulo; l.autor = autor;
  l.editorial = editorial||null; l.anio = anio||null; l.genero = genero; l.total = total;
  l.incompleto = datosIncompletos(l) ? 1 : 0;
  guardarDB();
  cerrarModal('modal-editar-libro');
  renderInventario();
  toast('Libro actualizado', 'exito');
}

function abrirEliminarLibro(libroId) {
  const l = DB.libros.find(x => x.id===libroId);
  if (!l) return;
  const enUso = copiasPrestadas(l) + copiasEnRevision(l);
  if (enUso > 0) { toast('No se puede eliminar: hay ' + enUso + ' ejemplar(es) prestado(s) o en revisión', 'error'); return; }
  document.getElementById('libro-eliminar-nombre').textContent = l.titulo;
  document.getElementById('modal-confirmar-eliminar-libro').dataset.libroId = libroId;
  abrirModal('modal-confirmar-eliminar-libro');
}
function confirmarEliminarLibro() {
  const libroId = Number(document.getElementById('modal-confirmar-eliminar-libro').dataset.libroId);
  const l = DB.libros.find(x => x.id === libroId);
  if (!l) { toast('No se encontró el libro', 'error'); return; }
  const titulo = l.titulo;
  DB.libros = DB.libros.filter(x => x.id !== libroId);
  guardarDB();
  cerrarModal('modal-confirmar-eliminar-libro');
  renderInventario();
  toast('Libro "' + titulo + '" eliminado', 'info');
}

// ══════════════════════════════════════════════════════════════════════════════
//  ADMIN — GESTIÓN DE GÉNEROS
// ══════════════════════════════════════════════════════════════════════════════
let generoEditando = null;
let generoEliminando = null;
let iconoElegido = 'libro';

function renderPaletaIconos() {
  const cont = document.getElementById('paleta-iconos');
  if (!cont) return;
  cont.innerHTML = ICONOS_GENERO.map(op =>
    '<button type="button" class="icono-opcion' + (op.clave === iconoElegido ? ' activo' : '') + '" ' +
    'title="' + escapeHtml(op.etiqueta) + '" aria-label="' + escapeHtml(op.etiqueta) + '" ' +
    'onclick="elegirIcono(\'' + op.clave + '\')">' + ico(op.clave) + '</button>'
  ).join('');
}
function elegirIcono(clave) { iconoElegido = clave; renderPaletaIconos(); }

function abrirGestorGeneros() {
  generoEditando = null;
  iconoElegido = 'libro';
  document.getElementById('gen-nuevo').value = '';
  document.getElementById('gen-form-titulo').textContent = 'Agregar género';
  document.getElementById('gen-btn-guardar').textContent = 'Agregar';
  document.getElementById('gen-btn-cancelar-edicion').style.display = 'none';
  renderPaletaIconos();
  renderListaGeneros();
  abrirModal('modal-generos');
}
function librosPorGenero(nombre) { return DB.libros.filter(l => l.genero === nombre).length; }

function renderListaGeneros() {
  const cont = document.getElementById('lista-generos');
  const generos = listaGeneros();
  if (!generos.length) { cont.innerHTML = '<div class="vacio" style="padding:24px"><p>No hay géneros registrados</p></div>'; return; }
  cont.innerHTML = generos.map(g => {
    const n = librosPorGenero(g);
    return '<div class="genero-fila">' +
      '<div class="genero-nombre">' +
        '<span class="genero-emoji">' + ico(generoIcono(g)) + '</span>' +
        '<span>' + escapeHtml(g) + '</span>' +
        '<span class="genero-conteo">' + n + ' libro' + (n===1?'':'s') + '</span>' +
      '</div>' +
      '<div class="genero-acciones">' +
        '<button class="btn btn-ghost btn-sm" onclick="editarGenero(' + JSON.stringify(g).replace(/"/g,'&quot;') + ')" title="Renombrar o cambiar icono">' + ico('lapiz') + '</button>' +
        '<button class="btn btn-ghost btn-sm" onclick="abrirEliminarGenero(' + JSON.stringify(g).replace(/"/g,'&quot;') + ')" title="Eliminar">' + ico('basura') + '</button>' +
      '</div>' +
    '</div>';
  }).join('');
}
function editarGenero(nombre) {
  generoEditando = nombre;
  iconoElegido = generoIcono(nombre);
  document.getElementById('gen-nuevo').value = nombre;
  document.getElementById('gen-form-titulo').textContent = 'Editando "' + nombre + '"';
  document.getElementById('gen-btn-guardar').textContent = 'Guardar cambios';
  document.getElementById('gen-btn-cancelar-edicion').style.display = 'inline-flex';
  renderPaletaIconos();
  document.getElementById('gen-nuevo').focus();
}
function cancelarEdicionGenero() {
  generoEditando = null; iconoElegido = 'libro';
  document.getElementById('gen-nuevo').value = '';
  document.getElementById('gen-form-titulo').textContent = 'Agregar género';
  document.getElementById('gen-btn-guardar').textContent = 'Agregar';
  document.getElementById('gen-btn-cancelar-edicion').style.display = 'none';
  renderPaletaIconos();
}
function refrescarSelectsDeGenero(nombrePreferido) {
  ['nl-genero', 'el-genero'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const actual = sel.value;
    const generos = listaGeneros();
    const destino = generos.includes(actual) ? actual : (nombrePreferido || generos[0]);
    poblarSelectGeneros(id, destino);
  });
}
function guardarGenero() {
  const nombre = document.getElementById('gen-nuevo').value.trim();
  if (!nombre) { toast('Escribe el nombre del género', 'error'); return; }
  if (nombre.length > 40) { toast('El nombre es demasiado largo (máx. 40 caracteres)', 'error'); return; }
  const generos = listaGeneros();
  const yaExiste = generos.some(g => g.toLowerCase() === nombre.toLowerCase() && g !== generoEditando);
  if (yaExiste) {
    document.getElementById('gen-dup-valor').textContent = nombre;
    abrirModal('modal-genero-duplicado'); return;
  }
  if (!DB.generoIconos) DB.generoIconos = {};
  if (generoEditando) {
    const anterior = generoEditando;
    DB.generos = generos.map(g => g === anterior ? nombre : g);
    let afectados = 0;
    DB.libros.forEach(l => { if (l.genero === anterior) { l.genero = nombre; afectados++; } });
    if (anterior !== nombre) delete DB.generoIconos[anterior];
    DB.generoIconos[nombre] = iconoElegido;
    if (filtroGeneroActual === anterior) filtroGeneroActual = nombre;
    guardarDB();
    cancelarEdicionGenero();
    renderListaGeneros();
    refrescarSelectsDeGenero(nombre);
    renderInventario();
    toast('Género actualizado a "' + nombre + '"' + (afectados ? ' — ' + afectados + ' libro(s) actualizado(s)' : ''), 'exito');
  } else {
    DB.generos = [...generos, nombre];
    DB.generoIconos[nombre] = iconoElegido;
    guardarDB();
    document.getElementById('gen-nuevo').value = '';
    iconoElegido = 'libro';
    renderPaletaIconos();
    renderListaGeneros();
    refrescarSelectsDeGenero(nombre);
    toast('Género "' + nombre + '" agregado y listo para usarse', 'exito');
  }
}
function abrirEliminarGenero(nombre) {
  generoEliminando = nombre;
  const n = librosPorGenero(nombre);
  document.getElementById('gen-del-nombre').textContent = nombre;
  const aviso = document.getElementById('gen-del-aviso');
  const selectorCaja = document.getElementById('gen-del-reasignar-caja');
  if (n > 0) {
    aviso.innerHTML = 'Hay <strong>' + n + ' libro(s)</strong> con este género. Elige a qué género se moverán:';
    const otros = listaGeneros().filter(g => g !== nombre);
    if (!otros.length) { toast('No puedes eliminar el único género existente', 'error'); return; }
    document.getElementById('gen-del-destino').innerHTML = otros.map(g => '<option value="' + escapeHtml(g) + '">' + escapeHtml(g) + '</option>').join('');
    selectorCaja.style.display = 'block';
  } else {
    aviso.textContent = 'Ningún libro usa este género, se puede eliminar sin afectar el inventario.';
    selectorCaja.style.display = 'none';
  }
  abrirModal('modal-eliminar-genero');
}
function confirmarEliminarGenero() {
  if (!generoEliminando) return;
  const nombre = generoEliminando;
  const n = librosPorGenero(nombre);
  if (n > 0) {
    const destino = document.getElementById('gen-del-destino').value;
    if (!destino) { toast('Elige un género de destino', 'error'); return; }
    DB.libros.forEach(l => { if (l.genero === nombre) l.genero = destino; });
  }
  DB.generos = listaGeneros().filter(g => g !== nombre);
  if (DB.generoIconos) delete DB.generoIconos[nombre];
  if (filtroGeneroActual === nombre) filtroGeneroActual = 'todos';
  guardarDB();
  generoEliminando = null;
  cerrarModal('modal-eliminar-genero');
  renderListaGeneros();
  refrescarSelectsDeGenero();
  renderInventario();
  toast('Género "' + nombre + '" eliminado' + (n ? ' — ' + n + ' libro(s) reasignado(s)' : ''), 'info');
}

// ══════════════════════════════════════════════════════════════════════════════
//  COMPROBANTES
// ══════════════════════════════════════════════════════════════════════════════
function construirComprobante(prestamo, libro, usuario, esCopia) {
  return '<div class="comp-fila"><span><b>Folio:</b></span><span>#' + String(prestamo.id).padStart(4,'0') + '</span></div>' +
    '<div class="comp-fila"><span><b>Libro:</b></span><span>' + escapeHtml(libro?.titulo || 'N/A') + '</span></div>' +
    '<div class="comp-fila"><span><b>Autor:</b></span><span>' + escapeHtml(libro?.autor || '—') + '</span></div>' +
    '<div class="comp-fila"><span><b>Usuario:</b></span><span>' + escapeHtml(usuario?nombreCompleto(usuario) : 'N/A') + '</span></div>' +
    '<div class="comp-fila"><span><b>Teléfono:</b></span><span>' + escapeHtml(formatTelefono(usuario?.telefono)) + '</span></div>' +
    '<div class="comp-fila"><span><b>Fecha préstamo:</b></span><span>' + formatFecha(prestamo.fecha_prestamo) + '</span></div>' +
    '<div class="comp-fila"><span><b>Fecha límite:</b></span><span>' + formatFecha(prestamo.fecha_limite) + '</span></div>' +
    (prestamo.fecha_devolucion ? '<div class="comp-fila"><span><b>Devuelto el:</b></span><span>' + formatFecha(prestamo.fecha_devolucion) + '</span></div>' : '') +
    (esCopia ? '<p style="margin-top:16px;font-size:12px;color:#C0392B;font-weight:600">— COPIA / REIMPRESIÓN —</p>' : '') +
    '<p style="margin-top:24px;font-size:12px;color:#888">Conserva este comprobante. Al vencerse el plazo podrían aplicarse restricciones al servicio.</p>';
}
function imprimirComprobante(prestamo, libro, usuario) {
  document.getElementById('comp-contenido').innerHTML = construirComprobante(prestamo, libro, usuario, false);
  setTimeout(() => window.print(), 400);
}
function reimprimirComprobante(prestamoId) {
  const p = DB.prestamos.find(x => x.id === prestamoId);
  if (!p) { toast('No se encontró el préstamo', 'error'); return; }
  const libro   = DB.libros.find(l => l.id === p.libro_id);
  const usuario = DB.usuarios.find(u => u.id === p.usuario_id);
  document.getElementById('vista-comp-folio').textContent = '#' + String(p.id).padStart(4,'0');
  document.getElementById('vista-comp-contenido').innerHTML = construirComprobante(p, libro, usuario, true);
  document.getElementById('modal-ver-comprobante').dataset.prestamoId = p.id;
  abrirModal('modal-ver-comprobante');
}
function imprimirDesdeVista() {
  const id = Number(document.getElementById('modal-ver-comprobante').dataset.prestamoId);
  const p = DB.prestamos.find(x => x.id === id);
  if (!p) return;
  const libro   = DB.libros.find(l => l.id === p.libro_id);
  const usuario = DB.usuarios.find(u => u.id === p.usuario_id);
  document.getElementById('comp-contenido').innerHTML = construirComprobante(p, libro, usuario, true);
  cerrarModal('modal-ver-comprobante');
  setTimeout(() => window.print(), 300);
}

// ══════════════════════════════════════════════════════════════════════════════
//  HISTORIAL (usuario)
// ══════════════════════════════════════════════════════════════════════════════
const HISTORIAL_POR_PAGINA = 20;
let historialVisibles = HISTORIAL_POR_PAGINA;

function estadoDePrestamo(p) {
  if (p.fecha_devolucion) return 'devuelto';
  return diasRestantes(p.fecha_limite) < 0 ? 'vencido' : 'activo';
}
function anioDeFecha(s) { return s ? String(s).slice(0, 4) : ''; }
function poblarSelectAnios(selectId, prestamos) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const previo = sel.value;
  const anios = [...new Set(prestamos.map(p => anioDeFecha(p.fecha_prestamo)).filter(Boolean))].sort((a, b) => b.localeCompare(a));
  sel.innerHTML = '<option value="">Todos los años</option>' + anios.map(a => '<option value="' + a + '">' + a + '</option>').join('');
  if (previo && anios.includes(previo)) sel.value = previo;
}
function reiniciarPaginaHistorial() { historialVisibles = HISTORIAL_POR_PAGINA; renderHistorial(); }
function verMasHistorial() { historialVisibles += HISTORIAL_POR_PAGINA; renderHistorial(); }
function limpiarFiltrosHistorial() {
  document.getElementById('busqueda-historial').value = '';
  document.getElementById('filtro-estado-historial').value = '';
  document.getElementById('filtro-anio-historial').value = '';
  reiniciarPaginaHistorial();
}
function renderHistorial() {
  const todos = DB.prestamos.filter(p => p.usuario_id === usuarioActual.id);
  poblarSelectAnios('filtro-anio-historial', todos);
  const q      = (document.getElementById('busqueda-historial')?.value || '').toLowerCase().trim();
  const estado = document.getElementById('filtro-estado-historial')?.value || '';
  const anio   = document.getElementById('filtro-anio-historial')?.value || '';
  const hayFiltros = !!(q || estado || anio);
  const btnLimpiar = document.getElementById('btn-limpiar-historial');
  if (btnLimpiar) btnLimpiar.style.display = hayFiltros ? 'inline-flex' : 'none';
  let filtrados = [...todos].reverse();
  if (estado) filtrados = filtrados.filter(p => estadoDePrestamo(p) === estado);
  if (anio)   filtrados = filtrados.filter(p => anioDeFecha(p.fecha_prestamo) === anio);
  if (q) filtrados = filtrados.filter(p => {
    const l = DB.libros.find(x => x.id === p.libro_id);
    return (l?.titulo || '').toLowerCase().includes(q) || (l?.autor || '').toLowerCase().includes(q);
  });
  const tbody = document.getElementById('historial-body');
  const conteo = document.getElementById('historial-conteo');
  const caja = document.getElementById('historial-mas');
  if (!todos.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="vacio"><span class="vacio-icono">' + ico('portapapeles') + '</span><h3>Sin historial</h3></div></td></tr>';
    if (conteo) conteo.textContent = ''; if (caja) caja.innerHTML = ''; return;
  }
  if (!filtrados.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="vacio"><span class="vacio-icono">' + ico('buscar') + '</span><h3>Sin resultados</h3></div></td></tr>';
    if (conteo) conteo.textContent = 'Ningún préstamo coincide (tienes ' + todos.length + ' en total)'; if (caja) caja.innerHTML = ''; return;
  }
  const visibles = filtrados.slice(0, historialVisibles);
  tbody.innerHTML = visibles.map(p => {
    const libro = DB.libros.find(l => l.id === p.libro_id);
    return `<tr><td><strong>${escapeHtml(libro?.titulo || 'N/A')}</strong></td><td>${escapeHtml(libro?.autor || '')}</td>
      <td>${formatFecha(p.fecha_prestamo)}</td><td>${formatFecha(p.fecha_limite)}</td><td>${formatFecha(p.fecha_devolucion)}</td>
      <td>${estadoBadge(p.estado, p.fecha_limite, p.fecha_devolucion)}</td></tr>`;
  }).join('');
  if (conteo) conteo.textContent = hayFiltros
    ? 'Mostrando ' + visibles.length + ' de ' + filtrados.length + ' filtrado(s) · ' + todos.length + ' en total'
    : 'Mostrando ' + visibles.length + ' de ' + filtrados.length + ' préstamo(s)';
  if (caja) {
    const faltan = filtrados.length - visibles.length;
    caja.innerHTML = faltan > 0 ? '<button class="btn btn-secundario" onclick="verMasHistorial()">Mostrar ' + Math.min(faltan, HISTORIAL_POR_PAGINA) + ' más (faltan ' + faltan + ')</button>' : '';
  }
}

// ══════════════════════════════════════════════════════════════════════════════
//  PRÉSTAMOS (admin)
// ══════════════════════════════════════════════════════════════════════════════
const PRESTAMOS_POR_PAGINA = 25;
let prestamosVisibles = PRESTAMOS_POR_PAGINA;
function reiniciarPaginaPrestamos() { prestamosVisibles = PRESTAMOS_POR_PAGINA; renderTablaPrestamoAdmin(); }
function verMasPrestamos() { prestamosVisibles += PRESTAMOS_POR_PAGINA; renderTablaPrestamoAdmin(); }
function limpiarFiltrosPrestamos() {
  document.getElementById('busqueda-prestamos-admin').value = '';
  document.getElementById('filtro-estado-prestamo').value = '';
  document.getElementById('filtro-anio-prestamo').value = '';
  reiniciarPaginaPrestamos();
}
function renderTablaPrestamoAdmin() {
  poblarSelectAnios('filtro-anio-prestamo', DB.prestamos);
  const q      = (document.getElementById('busqueda-prestamos-admin')?.value || '').toLowerCase().trim();
  const filtro = document.getElementById('filtro-estado-prestamo')?.value || '';
  const anio   = document.getElementById('filtro-anio-prestamo')?.value || '';
  const hayFiltros = !!(q || filtro || anio);
  const btnLimpiar = document.getElementById('btn-limpiar-prestamos');
  if (btnLimpiar) btnLimpiar.style.display = hayFiltros ? 'inline-flex' : 'none';
  let prestamos = [...DB.prestamos].reverse();
  if (filtro) prestamos = prestamos.filter(p => estadoDePrestamo(p) === filtro);
  if (anio)   prestamos = prestamos.filter(p => anioDeFecha(p.fecha_prestamo) === anio);
  if (q) prestamos = prestamos.filter(p => {
    const u = DB.usuarios.find(x => x.id === p.usuario_id);
    const l = DB.libros.find(x => x.id === p.libro_id);
    const folio = String(p.id).padStart(4, '0');
    return (u ? nombreCompleto(u).toLowerCase() : '').includes(q) ||
           soloDigitos(u?.telefono).includes(soloDigitos(q)) && !!soloDigitos(q) ||
           (l?.titulo || '').toLowerCase().includes(q) ||
           folio.includes(q.replace('#', ''));
  });
  const tbody  = document.getElementById('tabla-prestamos-admin');
  const conteo = document.getElementById('prestamos-conteo');
  const caja   = document.getElementById('prestamos-mas');
  if (!prestamos.length) {
    tbody.innerHTML = '<tr><td colspan="7"><div class="vacio" style="padding:30px">' + (hayFiltros ? 'Ningún préstamo coincide' : 'Sin registros') + '</div></td></tr>';
    if (conteo) conteo.textContent = hayFiltros ? DB.prestamos.length + ' préstamo(s) en total' : ''; if (caja) caja.innerHTML = ''; return;
  }
  const visibles = prestamos.slice(0, prestamosVisibles);
  tbody.innerHTML = visibles.map(p => {
    const u = DB.usuarios.find(x => x.id===p.usuario_id);
    const l = DB.libros.find(x => x.id===p.libro_id);
    const puede = !p.fecha_devolucion;
    const folio = '#' + String(p.id).padStart(4,'0');
    const acciones = '<button class="btn btn-ghost btn-sm" onclick="reimprimirComprobante(' + p.id + ')" title="Ver / reimprimir comprobante ' + folio + '">' + ico('recibo') + '</button>' +
      (puede ? ' <button class="btn btn-verde btn-sm" onclick="adminDevolverLibro('+p.id+')">Registrar devolución</button>' : '');
    return '<tr><td><span class="folio-tag">' + folio + '</span> ' + (u?escapeHtml(nombreCompleto(u)):'N/A') + '</td><td>' + escapeHtml(l?.titulo||'N/A') + '</td><td>' + formatFecha(p.fecha_prestamo) + '</td><td>' + formatFecha(p.fecha_limite) + '</td><td>' + formatFecha(p.fecha_devolucion) + '</td><td>' + estadoBadge(p.estado,p.fecha_limite,p.fecha_devolucion) + '</td><td style="white-space:nowrap">' + acciones + '</td></tr>';
  }).join('');
  if (conteo) conteo.textContent = hayFiltros
    ? 'Mostrando ' + visibles.length + ' de ' + prestamos.length + ' filtrado(s) · ' + DB.prestamos.length + ' en total'
    : 'Mostrando ' + visibles.length + ' de ' + prestamos.length + ' préstamo(s)';
  if (caja) {
    const faltan = prestamos.length - visibles.length;
    caja.innerHTML = faltan > 0 ? '<button class="btn btn-secundario" onclick="verMasPrestamos()">Mostrar ' + Math.min(faltan, PRESTAMOS_POR_PAGINA) + ' más (faltan ' + faltan + ')</button>' : '';
  }
}

// ══════════════════════════════════════════════════════════════════════════════
//  ADMIN — USUARIOS (con autorización de acceso)
//
//  Cuando alguien se registra queda con activo:0, autorizado:0 ("Pendiente").
//  No puede iniciar sesión hasta que un administrador presione "Dar acceso",
//  lo cual pone activo:1, autorizado:1 ("Activo"). A partir de ahí, el botón
//  de esa fila cambia a un interruptor normal de Activar/Desactivar.
// ══════════════════════════════════════════════════════════════════════════════
function estadoUsuario(u) {
  if (!u.autorizado) return 'pendiente';
  return u.activo ? 'activo' : 'inactivo';
}
function ordenarUsuarios(usuarios, criterio) {
  const copia = [...usuarios];
  const nombreDe = u => nombreCompleto(u);
  switch (criterio) {
    case 'pendientes':      return copia.sort((a, b) => (a.autorizado?1:0) - (b.autorizado?1:0) || cmpTexto(nombreDe(a), nombreDe(b)));
    case 'nombre-desc':     return copia.sort((a, b) => cmpTexto(nombreDe(b), nombreDe(a)));
    case 'registro-desc':   return copia.sort((a, b) => String(b.fecha_reg||'').localeCompare(String(a.fecha_reg||'')));
    case 'registro-asc':    return copia.sort((a, b) => String(a.fecha_reg||'').localeCompare(String(b.fecha_reg||'')));
    case 'estado-activo':   return copia.sort((a, b) => (b.activo?1:0) - (a.activo?1:0) || cmpTexto(nombreDe(a), nombreDe(b)));
    case 'estado-inactivo': return copia.sort((a, b) => (a.activo?1:0) - (b.activo?1:0) || cmpTexto(nombreDe(a), nombreDe(b)));
    case 'nombre-asc':
    default:                return copia.sort((a, b) => cmpTexto(nombreDe(a), nombreDe(b)));
  }
}
function renderUsuariosAdmin() {
  const q = (document.getElementById('busqueda-usr')?.value||'').toLowerCase();
  const orden = document.getElementById('orden-usuarios')?.value || 'pendientes';
  let usuarios = DB.usuarios;
  if (q) usuarios = usuarios.filter(u => nombreCompleto(u).toLowerCase().includes(q) || (soloDigitos(q) && soloDigitos(u.telefono).includes(soloDigitos(q))));
  usuarios = ordenarUsuarios(usuarios, orden);

  const conteo = document.getElementById('usuarios-conteo');
  if (conteo) {
    const activos = DB.usuarios.filter(u => u.activo).length;
    const pendientes = DB.usuarios.filter(u => !u.autorizado).length;
    let txt = q ? usuarios.length + ' usuario(s) encontrado(s) de ' + DB.usuarios.length
                : usuarios.length + ' usuario(s) · ' + activos + ' activo(s)';
    if (pendientes) txt += ' · ' + pendientes + ' pendiente(s) de autorización';
    conteo.textContent = txt;
  }

  const tbody = document.getElementById('tabla-usuarios-admin');
  if (!usuarios.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="vacio" style="padding:30px">' + (q ? 'Ningún usuario coincide' : 'Sin usuarios registrados') + '</div></td></tr>';
    return;
  }
  tbody.innerHTML = usuarios.map(u => {
    const estado = estadoUsuario(u);
    const badge = estado === 'pendiente'
      ? '<span class="badge badge-pendiente">' + ico('alerta-circulo') + ' Pendiente</span>'
      : estado === 'activo'
        ? '<span class="badge badge-verde">Activo</span>'
        : '<span class="badge badge-rojo">Inactivo</span>';
    const acciones = estado === 'pendiente'
      ? '<button class="btn btn-verde btn-sm" onclick="darAccesoUsuario(' + u.id + ')">' + ico('usuario-mas') + ' Dar acceso</button>'
      : '<button class="btn btn-ghost btn-sm" onclick="toggleUsuario(' + u.id + ')">' + (u.activo?'Desact.':'Activar') + '</button>';
    return '<tr' + (estado === 'pendiente' ? ' class="fila-pendiente"' : '') + '>' +
      '<td><strong>' + escapeHtml(nombreCompleto(u)) + '</strong></td>' +
      '<td><code style="background:var(--crema-2);padding:2px 6px;border-radius:4px;font-size:12px">' + escapeHtml(formatTelefono(u.telefono)) + '</code></td>' +
      '<td>' + formatFecha(u.fecha_reg) + '</td>' +
      '<td><span class="badge ' + (u.es_menor?'badge-amarillo':'badge-cafe') + '">' + (u.es_menor?'Menor':'Mayor') + '</span></td>' +
      '<td>' + badge + '</td>' +
      '<td style="white-space:nowrap"><button class="btn btn-ghost btn-sm" onclick="abrirEditarUsuario(' + u.id + ')" title="Editar">' + ico('editar') + '</button> ' + acciones + '</td></tr>';
  }).join('');
}

function darAccesoUsuario(usuarioId) {
  const u = DB.usuarios.find(x => x.id === usuarioId);
  if (!u) return;
  u.autorizado = 1;
  u.activo = 1;
  guardarDB();
  renderUsuariosAdmin();
  toast('Acceso otorgado a ' + nombreCompleto(u), 'exito');
}
function toggleUsuario(usuarioId) {
  const u = DB.usuarios.find(x => x.id === usuarioId);
  if (!u) return;
  u.activo = u.activo ? 0 : 1;
  guardarDB();
  renderUsuariosAdmin();
  toast(u.activo ? 'Usuario activado' : 'Usuario desactivado', 'info');
}

function abrirEditarUsuario(usuarioId) {
  const u = DB.usuarios.find(x => x.id===usuarioId);
  if (!u) return;
  document.getElementById('eu-nombre').value = u.nombre;
  document.getElementById('eu-apellido-paterno').value = u.apellidoPaterno || '';
  document.getElementById('eu-apellido-materno').value = u.apellidoMaterno || '';
  document.getElementById('eu-telefono').value = formatTelefono(u.telefono);
  document.getElementById('eu-password').value = '';
  document.getElementById('eu-menor').checked = !!u.es_menor;
  document.getElementById('modal-editar-usuario').dataset.usuarioId = usuarioId;
  abrirModal('modal-editar-usuario');
}
function guardarEdicionUsuario() {
  const usuarioId = Number(document.getElementById('modal-editar-usuario').dataset.usuarioId);
  const u = DB.usuarios.find(x => x.id === usuarioId);
  if (!u) return;
  const nombre    = document.getElementById('eu-nombre').value.trim().replace(/\s+/g, ' ');
  const apPaterno = document.getElementById('eu-apellido-paterno').value.trim().replace(/\s+/g, ' ');
  const apMaterno = document.getElementById('eu-apellido-materno').value.trim().replace(/\s+/g, ' ');
  const telefono  = soloDigitos(document.getElementById('eu-telefono').value);
  const password  = document.getElementById('eu-password').value;
  const esMenor   = document.getElementById('eu-menor').checked;

  if (!nombre || !apPaterno) { toast('El nombre y apellido paterno son obligatorios', 'error'); return; }
  if (telefono.length !== 10) { toast('El teléfono debe tener 10 dígitos', 'error'); return; }
  if (telefono !== soloDigitos(u.telefono) && DB.usuarios.find(usr => soloDigitos(usr.telefono) === telefono)) {
    toast('Ese teléfono ya está registrado en otra cuenta', 'error'); return;
  }
  if (password && !passwordValida(password)) {
    toast('La nueva contraseña necesita 8+ caracteres, una mayúscula y un número, sin símbolos', 'error'); return;
  }
  u.nombre = nombre; u.apellidoPaterno = apPaterno; u.apellidoMaterno = apMaterno || null;
  u.telefono = telefono; u.es_menor = esMenor?1:0;
  if (password) { sha256(password).then(h => { u.password = h; guardarDB(); }); }
  guardarDB();
  cerrarModal('modal-editar-usuario');
  renderUsuariosAdmin();
  toast('Usuario actualizado', 'exito');
}

// ══════════════════════════════════════════════════════════════════════════════
//  ARRANQUE
// ══════════════════════════════════════════════════════════════════════════════
document.addEventListener('keydown', function(e) {
  if (e.key==='Escape') document.querySelectorAll('.modal-overlay.activo').forEach(m => m.classList.remove('activo'));
});
document.getElementById('login-telefono')?.addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('login-pass').focus(); });
['login-telefono','reg-telefono'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', function(){
    const d = soloDigitos(this.value).slice(0, 10);
    this.value = d.length > 6 ? d.slice(0,3)+' '+d.slice(3,6)+' '+d.slice(6)
               : d.length > 3 ? d.slice(0,3)+' '+d.slice(3)
               : d;
  });
});
window.addEventListener('pageshow', limpiarCamposSensibles);

iniciarBaseDeDatos();
