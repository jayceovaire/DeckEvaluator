import {useSupabase} from "~/composables/useSupabase";

const supabase = useSupabase()
const user = useState('supabase-user', () => null)

supabase.auth.getSession().then(({ data }) => {
    user.value = data.session?.user ?? null
})

// Subscribe to changes
supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user ?? null
})

