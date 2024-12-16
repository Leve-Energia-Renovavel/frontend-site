import NewHomeBenefits from './benefits/NewHomeBenefits'
import NewHomeBoxes from './boxes/new-home/NewHomeBoxes'
import NewHomeTutorial from './tutorial/new-home/NewHomeTutorial'

export default function HomeMainSecond() {
    return (
        <>
            <NewHomeBoxes />

            <NewHomeBenefits />

            <NewHomeTutorial />
        </>
    )
}