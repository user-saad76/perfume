import FeaturedCollection from "../components/FeaturedCollection"
import PerfumeBanners from "../components/PerfemeBanners"
import SignatureSeries from "../components/SignatureSeries"
import { useFetch } from "../hooks/useFetch";

function Home() {

  const {Data:signatureSeries,error,loading} = useFetch("http://localhost:5000/signature-series");
   const {Data:featuredCollectionData,error:ErrorFeaturedCollection,loading:LoadingFeaturedCollection} = useFetch("http://localhost:5000/featured-collection");
    return(
        <>
        <PerfumeBanners/>
        <SignatureSeries signatureSeries={signatureSeries?.getAllproducts || []}/>
        <FeaturedCollection  featuredCollectionData={featuredCollectionData?.getFeaturedCollection || []}/>
        </>
    )
}
export default Home