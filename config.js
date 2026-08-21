/*
 * Configuración de Supabase
 * ------------------------------------------------------------------
 * Reemplazá los dos valores de abajo por los de TU proyecto de Supabase.
 * Los encontrás en: Project Settings > API
 *   - Project URL         -> SUPABASE_URL
 *   - anon / public key    -> SUPABASE_ANON_KEY
 *
 * La "anon key" está pensada para exponerse en el frontend (no es secreta),
 * la seguridad real la dan las políticas de Row Level Security (RLS)
 * que se crean en supabase-schema.sql.
 */
const SUPABASE_URL = "https://xczffzdxxeaupyjxwgio.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qy9O8oL5IDfppFZCn4aOVQ__R9JqkEX";

// URL pública del sitio (la que ve el cliente al escanear el QR)
const SITE_URL = "https://mantenimiento-sage-ten.vercel.app/";
