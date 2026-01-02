import FeaturedCollection from "../components/FeaturedCollection"
import PerfumeBanners from "../components/PerfemeBanners"
import Review from "../components/Reviews";
import SignatureSeries from "../components/SignatureSeries"
import SpecialCollections from "../components/SpecialCollections";
import { useFetch } from "../hooks/useFetch";

function Home() {

  const {Data:signatureSeries,error,loading} = useFetch("http://localhost:5000/signature-series");
   const {Data:featuredCollectionData,error:ErrorFeaturedCollection,loading:LoadingFeaturedCollection} = useFetch("http://localhost:5000/featured-collection");
   
    return(
        <>
        <PerfumeBanners/>
        <SignatureSeries signatureSeries={signatureSeries?.getAllproducts || []}/>
        <FeaturedCollection  featuredCollectionData={featuredCollectionData?.getFeaturedCollection || []}/>
        <SpecialCollections/>
         <Review/>
        </>
    )
}
export default Home