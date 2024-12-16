import BrandsContainer from "./brands/HomeBrands";
import NewHomeForm from "./form/new-home/NewHomeForm";
import NewHomeVideo from "./video/NewHomeVideo";

export default function HomeMainThird() {
    return (
        <>
            <NewHomeForm />

            <BrandsContainer />

            <NewHomeVideo />
        </>
    )
}