import './style.css';

export default function Balls(props){
    return(
        <>
            <div className="ballsDiv">
                <div className="ovalBall" />
                <div className="ball" />
                <div className="ball" />
                <div className="ovalBall" style={{marginLeft: 80}} />
                <div className="ball" />
                <div className="ball" />
                <div className="ovalBall" style={{marginLeft: 80}} />
                <div className="ball" />
                <div className="ball" />
            </div>
        </>
    )
}