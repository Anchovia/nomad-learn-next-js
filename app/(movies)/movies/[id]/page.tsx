import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

interface IParams {
    params: Promise<{ id: string }>
    searchParams: Promise<{ searchParamsData: undefined }>
}

export async function generateMetadata({
    params, // 동적 세그먼트
    searchParams, // 쿼리스트링
}: IParams) {
    const { id } = await params
    const searchParamsData = await searchParams

    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({
    params, // 동적 세그먼트
    searchParams, // 쿼리스트링
}: IParams) {
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
