
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://fyadkralszkltdwayies.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5YWRrcmFsc3prbHRkd2F5aWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczMTgwOTUsImV4cCI6MTk5Mjg5NDA5NX0.PYVE17ZspD9WXmGfjkZdPIICSc0034QLZ06JBCI7BNg';
export const supabase = createClient(supabaseUrl, supabaseKey)