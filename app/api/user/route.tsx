import { prisma } from '@/lib/prismadb'


export async function POST(request:any) {
    
    const allUsers = await prisma.insured.findMany();
    return new Response(JSON.stringify(allUsers));

}

export async function GET(request:any) {
    return POST(request);
}