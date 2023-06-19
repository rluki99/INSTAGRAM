import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://wzuiuzunpmubiiswycsn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6dWl1enVucG11Ymlpc3d5Y3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MDMwNjUsImV4cCI6MjAwMjQ3OTA2NX0.5pP8_uj-Lmcr8PpIXHg2AAklQGNbaLU6msr5yZcLGKk'

export const supabase = createClient(supabaseUrl, supabaseKey)
