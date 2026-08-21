# El Ruso — Cepillado de Tapas y Block

Sitio estático (HTML/CSS/JS puro, sin build) con:

- `index.html` — página pública, buscador de patente.
- `admin.html` — panel privado (login) para cargar/editar/borrar patentes.
- `config.js` — credenciales públicas de Supabase (URL + anon key).
- `supabase-schema.sql` — script para crear la tabla y los permisos.
- `logo.png` — logo del taller.

## 1. Crear el proyecto en Supabase

1. Entrá a [supabase.com](https://supabase.com) y creá un proyecto nuevo (gratis).
2. Andá a **SQL Editor** → **New query**, pegá todo el contenido de `supabase-schema.sql` y ejecutalo (▶ Run). Esto crea la tabla `vehiculos` y las políticas de seguridad:
   - Cualquiera puede **consultar** patentes (para que `index.html` funcione sin login).
   - Solo un usuario logueado puede **insertar / editar / borrar** (para `admin.html`).
3. Andá a **Authentication → Providers** y dejá solo **Email** habilitado.
4. Andá a **Authentication → Users → Add user** y creá TU usuario admin (email + contraseña). No hace falta ni conviene habilitar el registro público — el único que entra a `admin.html` sos vos.
5. Andá a **Project Settings → API** y copiá:
   - **Project URL**
   - **anon public key**

## 2. Cargar las credenciales

Abrí `config.js` y reemplazá:

```js
const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_KEY_ACA";
```

por los valores reales que copiaste en el paso anterior. La `anon key` es pública por diseño (no es secreta) — la seguridad real la dan las políticas de RLS del script SQL.

## 3. Subir a GitHub

Desde la carpeta con estos archivos:

```bash
git init
git add .
git commit -m "El Ruso - sitio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/el-ruso.git
git push -u origin main
```

(Si todavía no creaste el repo, hacelo antes en github.com → New repository, sin README ni .gitignore para no pisar nada.)

## 4. Desplegar en Vercel

1. Entrá a [vercel.com](https://vercel.com) → **Add New → Project**.
2. Importá el repositorio de GitHub que acabás de crear.
3. Framework Preset: dejalo en **Other** (es HTML plano, no necesita build ni comandos).
4. Deploy. En un par de minutos te da una URL pública, por ejemplo `el-ruso.vercel.app`.

La página principal queda en `/` y el panel de administración en `/admin.html` — no está enlazado desde el sitio público, entrás directo por esa URL con tu usuario y contraseña.

## Notas

- Cada vez que hagas `git push` a `main`, Vercel vuelve a desplegar solo.
- Si querés un dominio propio (ej. `elruso.com.ar`), se agrega desde Vercel → Project → Settings → Domains. **Si cambiás de dominio, actualizá también `SITE_URL` en `config.js`** — es la URL que codifica el QR imprimible del panel admin.
- Si más adelante querés más de un admin, simplemente creás más usuarios en Authentication → Users; todos van a poder cargar/editar patentes por igual.
