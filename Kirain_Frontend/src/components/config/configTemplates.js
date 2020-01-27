import { auth, firestore, useAuth, firebase } from 'gatsby-theme-firebase'
import { Typography, Chip, Box, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { queryRoomInfo } from '../RoomInfo'
import Highlight from 'src/components/en/room/Highlight'

const avalonConfig = {
	title: 'Avalon',
	config: [
		{ name: 'Merlin', count: 1 },
		{
			name: 'Percival',
			count: 1
		},
		{
			name: 'Servant',
			count: 1
		},
		{
			name: 'Morgana',
			count: 1
		},
		{
			name: 'Assassin',
			count: 1
		}
	]
}

const werewolves = {
	title: 'Werewolves',
	config: [
		{ name: 'Seer', count: 1 },
		{
			name: 'Witch',
			count: 1
		},
		{
			name: 'Hunter',
			count: 1
		},
		{
			name: 'Werewolf',
			count: 3
		},
		{
			name: 'Villager',
			count: 3
		}
	]
}

const poker = {
	title: 'Poker',
	boardCount: 5,
	handCount: 2,
	config: [
		{
			count: 1,
			name: '10C'
		},
		{
			count: 1,
			name: '10D'
		},
		{
			count: 1,
			name: '10H'
		},
		{
			count: 1,
			name: '10S'
		},
		{
			count: 1,
			name: '2C'
		},
		{
			count: 1,
			name: '2D'
		},
		{
			count: 1,
			name: '2H'
		},
		{
			count: 1,
			name: '2S'
		},
		{
			count: 1,
			name: '3C'
		},
		{
			count: 1,
			name: '3D'
		},
		{
			count: 1,
			name: '3H'
		},
		{
			count: 1,
			name: '3S'
		},
		{
			count: 1,
			name: '4C'
		},
		{
			count: 1,
			name: '4D'
		},
		{
			count: 1,
			name: '4H'
		},
		{
			count: 1,
			name: '4S'
		},
		{
			count: 1,
			name: '5C'
		},
		{
			count: 1,
			name: '5D'
		},
		{
			count: 1,
			name: '5H'
		},
		{
			count: 1,
			name: '5S'
		},
		{
			count: 1,
			name: '6C'
		},
		{
			count: 1,
			name: '6D'
		},
		{
			count: 1,
			name: '6H'
		},
		{
			count: 1,
			name: '6S'
		},
		{
			count: 1,
			name: '7C'
		},
		{
			count: 1,
			name: '7D'
		},
		{
			count: 1,
			name: '7H'
		},
		{
			count: 1,
			name: '7S'
		},
		{
			count: 1,
			name: '8C'
		},
		{
			count: 1,
			name: '8D'
		},
		{
			count: 1,
			name: '8H'
		},
		{
			count: 1,
			name: '8S'
		},
		{
			count: 1,
			name: '9C'
		},
		{
			count: 1,
			name: '9D'
		},
		{
			count: 1,
			name: '9H'
		},
		{
			count: 1,
			name: '9S'
		},
		{
			count: 1,
			name: 'AC'
		},
		{
			count: 1,
			name: 'AD'
		},
		{
			count: 1,
			name: 'AH'
		},
		{
			count: 1,
			name: 'AS'
		},
		{
			count: 1,
			name: 'JC'
		},
		{
			count: 1,
			name: 'JD'
		},
		{
			count: 1,
			name: 'JH'
		},
		{
			count: 1,
			name: 'JS'
		},
		{
			count: 1,
			name: 'KC'
		},
		{
			count: 1,
			name: 'KD'
		},
		{
			count: 1,
			name: 'KH'
		},
		{
			count: 1,
			name: 'KS'
		},
		{
			count: 1,
			name: 'QC'
		},
		{
			count: 1,
			name: 'QD'
		},
		{
			count: 1,
			name: 'QH'
		},
		{
			count: 1,
			name: 'QS'
		}
	]
}

export const custom = { title: 'Custom Config', config: [] }

const configTemplates = [avalonConfig, werewolves, poker, custom]

export default configTemplates

export const publicComponents = {
	Avalon: ({ stage, roundInfo }) => {
		return (
			<>
				{stage % 2 == 1 ? (
					<Typography variant='body1' paragraph>
						Waiting for results.
					</Typography>
				) : (
					<Typography variant='body1' paragraph>
						<Highlight>{roundInfo.successCount ? roundInfo.successCount : 0}</Highlight> success votes,
						<Highlight>{roundInfo.failCount ? roundInfo.failCount : 0}</Highlight> fail votes.
					</Typography>
				)}
			</>
		)
	}
}
