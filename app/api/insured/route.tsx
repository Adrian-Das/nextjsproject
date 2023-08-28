import { query } from "@/lib/db";


export async function POST(request:any) {
    /*const users = [
        { id: 1, name : 'John' },
        { id: 2, name : 'Jane' },
        { id: 3, name : 'Bob' }
    ];
    return new Response(JSON.stringify(users));*/

    const insured = await query({
        query: "SELECT * FROM insured",
        values: [],
    });

    return new Response(JSON.stringify(insured));

}

export async function GET(request:any) {
    return POST(request);
}