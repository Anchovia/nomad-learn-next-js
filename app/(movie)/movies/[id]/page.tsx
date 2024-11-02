export default async function MovieDetail({
    params, // 동적 세그먼트
    searchParams, // 쿼리스트링
}: {
    params: Promise<{ id: string }>
    searchParams: Promise<{ paramsObj: undefined }>
}) {
    const { id } = await params
    const paramsObj = await searchParams
    console.log(paramsObj)

    return <h1>Movie Detail #{id}</h1>
}
