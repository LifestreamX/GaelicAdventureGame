import { GameState } from "../../model/game/game-state";
import { GameCommand } from "../game-command";
import { CommandParser } from "./command";

export const LOOK_COMMAND_PARSER: CommandParser = {
    l1: 'look',
    l2: 'seall',
    getCommandPreviews: (gameState: GameState) => {
        return {
            l1: [{
                prompt: "look",
                previewText: "look",
                enabled: true,
                isComplete: true,
                followUpPreviews: [],
                command: GameCommand.look(),
            }],
            l2: [{
                prompt: "seall",
                previewText: "seall",
                enabled: true,
                isComplete: true,
                followUpPreviews: [],
                command: GameCommand.look(),
            }]
        };
    },
    helpText: {l1: 'Look around', l2: 'Seall mun cuairt'},
    parse: (rest: string, gameState: GameState): GameCommand => {
        return GameCommand.look();
    },
    getValidCommands: (gameState: GameState) => {
        return {
            l1: ['look'],
            l2: ['seall'],
        };
    }
}
