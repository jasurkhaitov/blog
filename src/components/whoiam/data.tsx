import Shawshank from '../../assets/shows/Shawshank_Redemption.webp'
import Forrest from '../../assets/shows/Forrest_Gump.webp'
import Gladiator from '../../assets/shows/Gladiator.webp'

export const movies = [
	{
		img: Shawshank,
		name: 'The Shawshank Redemption',
		imdb: 9.3,
		year: 1994,
		url: 'https://www.imdb.com/title/tt0111161/?ref_=ext_shr_lnk',
		genres: ['Drama'],
	},
	{
		img: Forrest,
		name: 'Forrest Gump',
		imdb: 8.8,
		year: 1994,
		url: 'https://www.imdb.com/title/tt0109830/?ref_=ext_shr_lnk',
		genres: ['Drama', 'Romance'],
	},
	{
		img: Gladiator,
		name: 'Gladiator',
		imdb: 8.5,
		year: 2000,
		url: 'https://www.imdb.com/title/tt0172495/?ref_=ext_shr_lnk',
		genres: ['Drama', 'Action', 'Adventure'],
	},
]

import GameOfThrones from '../../assets/shows/gameOfThrones.webp'
import HouseOfDragons from '../../assets/shows/houseOfDragons.webp'
import PrisionBreak from '../../assets/shows/prisonBreak.webp'

export const series = [
	{
		img: GameOfThrones,
		name: 'Game of Thrones',
		imdb: 9.2,
		year: 2011,
		url: 'https://www.imdb.com/title/tt0944947/?ref_=ext_shr_lnk',
		genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
	},
	{
		img: HouseOfDragons,
		name: 'House of the Dragon',
		imdb: 8.3,
		year: 2022,
		url: 'https://www.imdb.com/title/tt11198330/?ref_=ext_shr_lnk',
		genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Romance'],
	},
	{
		img: PrisionBreak,
		name: 'Prison Break',
		imdb: 8.3,
		year: 2005,
		url: 'https://www.imdb.com/title/tt0455275/?ref_=ext_shr_lnk',
		genres: ['Action', 'Crime', 'Drama', 'Mystery', 'Thriller'],
	},
]

export const podcasts = [
  {
    key: 'QURULTOY',
    url: 'https://www.youtube.com/@QURULTOY',
		lang: 'uz'
  },
  {
    key: 'PowerfulJRE',
    url: 'https://www.youtube.com/@joerogan',
		lang: 'en'
  },
]