import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaG5hZnJ4YWVjdmd4c2NpcmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4MjE3NDUsImV4cCI6MTk2ODM5Nzc0NX0.nGnQoy8j92YFtHqlvRgz8Imxpn4oHlgh9kon0RZGU6s";
const SUPABASE_URL="https://fjhnafrxaecvgxscirhl.supabase.co";

const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    return{
        supabase,
    };
};

export default useSupabase;

