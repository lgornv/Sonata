import React from 'react'
import Banner from '../../components/Banner/Banner'
import Chapter from '../../components/Chapter/Chapter'
import { advantagesData, stock } from '../../components/Chapter/ChapterData';
import ChapteServices from '../../components/ChapteServices/ChapteServices';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
  return (
    <div>
      <Banner />
      <Chapter
        title={advantagesData.title}
        imageUrl={advantagesData.imageUrl}
        content={advantagesData.content}
      />
      <ChapteServices />
      <Chapter
        title={stock.title}
        imageUrl={stock.imageUrl}
        content={stock.content}
      />
      <FAQ />
    </div>
  )
}

export default Home