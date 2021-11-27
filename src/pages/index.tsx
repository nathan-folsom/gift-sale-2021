import * as React from "react";
import '../styles.scss';
// @ts-ignore
import divider from '../images/divider.svg';

const IndexPage = () => {
    const Address = () => <div className={'address'}>
        <h2>December 19th</h2>
        <h2>11am-5pm</h2>
        <h2>850 NE 88th St.</h2>
        <h2>Seattle</h2>
    </div>

    return (
        <main>
            <title>Gift Sale 2021</title>
            <div className={'main'}>
                <div className={'content-container'}>
                    <div className={'left-col'}>
                        <h1 className={'title'}>Holiday Gift Sale<br/>2021</h1>
                        <h3>presented by Mangia Bene Catering</h3>
                        <div className={'desktop-divider'}>
                            <img src={divider} alt={'divider'}/>
                        </div>
                        <div className={'mobile-divider'}>
                            <Address />
                        </div>
                        <h3>We bring the refreshments...</h3>
                        <p>You bring your appetite, friends
                            and family, face covering, and holiday shopping list!</p>
                        <p>Browse a selection of local artists including fiber artists, ceramicists, jewelers and more.</p>
                        <p>All proceeds go to artists!</p>
                    </div>
                    <div className={'right-col'}>
                        <Address />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default IndexPage;
