import {useSupabase} from "~/composables/useSupabase";
import type {Card} from '~/types/Card'

export function useCards() {
    const cards = ref<Card[]>([])

    const getCards = async () => {
        const supabase = useSupabase();
        const { data, error } = await supabase.from('cards').select().eq('name','Etali, Primal Conqueror')

        if (error) throw error
        cards.value = data ?? []
    }

    return {
        cards,
        getCards
    }
}


