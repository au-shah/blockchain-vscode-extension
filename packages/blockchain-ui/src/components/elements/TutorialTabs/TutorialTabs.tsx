import React, { Component } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import './TutorialTabs.scss';

interface IProps {
    tutorialData: Array<{seriesName: string, seriesTutorials: any[]}>;
}

class TutorialTabs extends Component<IProps> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.tabHandler = this.tabHandler.bind(this);
    }

    tabHandler(): void {
        // tslint:disable-next-line: no-console
        console.log('hello');
    }

    createTabs(): Array<JSX.Element> {
        const tabArray: JSX.Element[] = [];
        this.props.tutorialData.map((tutorialSeries: {seriesName: string, seriesTutorials: any[]}, index: number) => {
            const tabLabel: string = `${tutorialSeries.seriesName} (${tutorialSeries.seriesTutorials.length})`;
            tabArray.push(
                <Tab
                    href='#'
                    tabIndex={index}
                    handleTabClick={this.tabHandler}
                    handleTabKeyDown={this.tabHandler}
                    handleTabAnchorFocus={this.tabHandler}
                    label={tabLabel}
                >
                    {this.populateTabs(tutorialSeries.seriesTutorials)}
                </Tab>
            );
        });
        return tabArray;
    }

    populateTabs(seriesTutorials: any[]): Array<JSX.Element> {
        const tutorialNameArray: JSX.Element[] = [];
        for (const tutorial of seriesTutorials) {
            tutorialNameArray.push(
                <p>{tutorial.title}</p>
            );
        }
        return tutorialNameArray;
    }

    render(): JSX.Element {
        if (this.props.tutorialData.length > 0) {
            return (
                <Tabs triggerHref='#'>
                    {this.createTabs()}
                </Tabs>
            );
        } else {
            return <></>;
        }
    }
}

export default TutorialTabs;
