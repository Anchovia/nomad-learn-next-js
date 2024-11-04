import { Suspense } from 'react'
import MovieInfo from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

export default async function MovieDetail({
    params, // 동적 세그먼트
    searchParams, // 쿼리스트링
}: {
    params: Promise<{ id: string }>
    searchParams: Promise<{ searchParamsData: undefined }>
}) {
    const { id } = await params
    const searchParamsData = await searchParams

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}
