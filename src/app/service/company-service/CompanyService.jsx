export async function getCNPJ(cnpj) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_FETCH_CNPJ}/${cnpj}`);
        return response
    } catch (error) {
        console.error('Error fetching CNPJ data:', error);
    }
}