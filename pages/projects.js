import React from 'react'
import CleanCard from '../components/shared/cards/clean-card/CleanCard'

const projects = () => {

    const FakeProjects = {
            name: "let's Vest",
            weeks: 7,
            Progress: 70,
            team: "Stockholm",
            img: ['https://kyh.se/wp-content/uploads/2019/01/Jon.jpg', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fchef.se%2F3-satt-sa-gjorde-steve-jobs-sina-moten-superproduktiva%2F&psig=AOvVaw0203vaV4-P8E7FxeObNrNq&ust=1619787375563000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjr-arAo_ACFQAAAAAdAAAAABAD']
        }


    return (
        <div>
            <CleanCard name={FakeProjects.name} imgArr={FakeProjects.img}/>
        </div>
    )
}

export default projects
