import react from "react"
import styled from "@emotion/styled"
// import { Link } from "react-router-dom"
import Tag from "../tag/tag.component"
import Card from "../card/card.component"
import ListCard from "../listCard/listCard.component"
// import imageUrl from "../../assets/thinkingOutLoud.png";
import RoseUrl from "../../assets/roses.jpg";
import BluesUrl from "../../assets/blues.jpg";
import BassGuitarUrl from "../../assets/bassGuitar.jpg";
import ConcertUrl from "../../assets/concert.jpg";

const RightSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    width: 45%;
    height: 100%;
    border-radius: 10px;

`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5em;
        h2 {
            margin: 0;
            padding: 0;
        }

    }
    a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        transition: all 0.2s ease-in-out;
        &:hover {
            text-decoration: underline;
        }

    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.5em;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const FilterSongContainer = styled.div`
    width: 100%;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`;

const AllSongContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    gap: 0.5em;
    h3 {
        margin: 0;
        padding: 0;
    }

`;


const RightSidebar = () => {
    return (
        <RightSideBarContainer>
            <TitleContainer>
                <div>
                    <h2>Music</h2>
                    <h2>Categories</h2>
                </div>

                <a href="#">View All</a>
            </TitleContainer>

            <FilterContainer>
            <Tag Genre="Jazz"/>
                <Tag Genre="classical"/>
                <Tag Genre="Blues"/>
                <Tag Genre="Soul"/>
                <Tag Genre="Rock"/>
                <Tag Genre="Pop"/>                
                <Tag Genre="Rap"/>
                <Tag Genre="Hip Hop"/>
                <Tag Genre="R&B"/>
                <Tag Genre="Country"/>
                <Tag Genre="Reggae"/>
                
                            
            </FilterContainer>
            <FilterSongContainer>
                <Card imageUrl={RoseUrl}/>
                <Card imageUrl={BluesUrl}/>
                <Card imageUrl={BassGuitarUrl}/>
            </FilterSongContainer>

            <AllSongContainer>
                <h3>Available Songs</h3>
                <ListCard />
                <ListCard />
                <ListCard />
            </AllSongContainer>
        </RightSideBarContainer>
    )
}

export default RightSidebar;