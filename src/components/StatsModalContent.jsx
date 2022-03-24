import React, { useEffect, useState } from 'react';
import { STATS_STORAGE_KEY } from '../consts';
import GuessDistribution from './GuessDistribution';
import { useGameContext } from '../store/GameState';
import styles from './StatsModalContent.module.css';

function StatsModalContent({ answerWord }) {
    const [stats, setStats] = useState({});
    const [state, dispatch] = useGameContext();
    const { isGameOver, isWin, endGameMessage } = state;


    // let messageBase = isWin
    //     ? `You win...this time...`
    //     : 'YOU LOSE lol sucks to suck bro git gud';

    useEffect(() => {
        const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
        setStats(playerStats);
    }, []);

    return (
        <div className={styles.statsModalContent}>
            {isGameOver && (
                <h4>
                    The answer was <span className={styles.answerWord}>{answerWord}</span>
                </h4>
            )}
            {endGameMessage && (
                <div className={styles.endGameMessage}>
                    {/* <h4>{messageBase}</h4> */}
                    <h4>{endGameMessage}</h4>
                </div>
            )}
            <div className={styles.statsContentWrapper}>
                <div className={styles.statistics}>
                    <div className={styles.guessDistributionText}>
                        <h4 className={styles.statisticsHeader}>Statistics</h4>
                    </div>
                    <div className={styles.statisticsWrapper}>
                        <h5 className={styles.statsText}>Current Streak:</h5>
                        <h5 className={styles.stat}>{stats.currentStreak}</h5>
                    </div>
                    <div className={styles.statisticsWrapper}>
                        <h5 className={styles.statsText}>Max Streak:</h5>
                        <h5 className={styles.stat}>{stats.maxStreak}</h5>
                    </div>
                    <div className={styles.statisticsWrapper}>
                        <h5 className={styles.statsText}>Games Played:</h5>
                        <h5 className={styles.stat}>{stats.gamesPlayed}</h5>
                    </div>
                    <div className={styles.statisticsWrapper}>
                        <h5 className={styles.statsText}>Games Won:</h5>
                        <h5 className={styles.stat}>{stats.gamesWon}</h5>
                    </div>
                    <div className={styles.statisticsWrapper}>
                        <h5 className={styles.statsText}>Win Percentage:</h5>
                        <h5 className={styles.stat}>{stats.winPercentage}%</h5>
                    </div>
                </div>
                <GuessDistribution guesses={stats.guesses} />
            </div>
        </div>
    );
}

export default StatsModalContent;
