import FeaturedCollection from "../components/FeaturedCollection"
import PerfumeBanners from "../components/PerfemeBanners"
import SignatureSeries from "../components/SignatureSeries"
import { useFetch } from "../hooks/useFetch";

function Home() {

  const {Data:signatureSeries,error,loading} = useFetch("http://localhost:5000/signature-series");
    return(
        <>
        <PerfumeBanners/>
        <SignatureSeries signatureSeries={signatureSeries?.getAllproducts || []}/>
        <FeaturedCollection/>
        </>
    )
}
export default Home