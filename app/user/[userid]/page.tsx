export async function generateMetadata({params, searchParams}:any) {
    return {title : params.userid};
}

export default function page({ params }:any) {
    return (
        <div>
            Hello User {params.userid}
        </div>
    )
}
