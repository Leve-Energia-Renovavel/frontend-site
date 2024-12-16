import React from 'react'
import NewHomeBoxes from './boxes/new-home/NewHomeBoxes'
import NewHomeBenefits from './benefits/NewHomeBenefits'
import NewHomeTutorial from './tutorial/new-home/NewHomeTutorial'
import NewHomeForm from './form/new-home/NewHomeForm'
import BrandsContainer from './brands/HomeBrands'
import NewHomeVideo from './video/NewHomeVideo'

export default function HomeMainSecond() {
    return (
        <>
            <NewHomeBoxes />

            <NewHomeBenefits />

            <NewHomeTutorial />

            <NewHomeForm />

            <BrandsContainer />

            <NewHomeVideo />
        </>
    )
}