declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* This function returns a list of all the possible, useful choices a player
	* has to choose between for their turn
	* @param {Board} board
	* @returns {Uint8Array}
	*/
	export function get_choices(board: Board): Uint8Array;
	/**
	* Generates a random board, where no cell is of the same color as any other
	* cell
	* @returns {Board}
	*/
	export function gen_random_board(): Board;
	/**
	* Solves a given board and returns an int containing the best move
	* @param {string} board_str
	* @param {number} depth
	* @returns {Promise<any>}
	*/
	export function solve_board(board_str: string, depth: number): Promise<any>;
	/**
	*/
	export function test_distribution_timer(): void;
	/**
	* @param {WorkerGlobalScope} wgs
	* @param {string} req_id
	* @returns {_Worker}
	*/
	export function wmt_bootstrap(wgs: WorkerGlobalScope, req_id: string): _Worker;
	/**
	* A Board struct keeping track of the current state, specifically the current
	* board and the current player's turn
	*/
	export class Board {
	  free(): void;
	/**
	* Creates a board from a string (of length 56), composed of the chars
	* in order of each cell of the board, as well as the current player's turn
	* @param {string} board
	* @returns {Board}
	*/
	  static from_str(board: string): Board;
	/**
	* Returns an immutable reference to the private player turn
	* @returns {number}
	*/
	  get_player_turn(): number;
	/**
	* Returns a string describing the current board, which can be useful for
	* copying the board and storing it
	* @returns {string}
	*/
	  get_string(): string;
	/**
	* Returns the cell at the given row and column
	* @param {number} row
	* @param {number} column
	* @returns {number}
	*/
	  get_cell(row: number, column: number): number;
	/**
	* Returns a new board after the current player chooses the given color and
	* the board is updated accordingly
	* @param {number} choice
	* @returns {Board}
	*/
	  run_turn(choice: number): Board;
	/**
	* Calculates which board indices belong to the given player
	* @param {number} player_number
	* @returns {Uint8Array}
	*/
	  get_player_squares(player_number: number): Uint8Array;
	}
	/**
	*/
	export class DistributionTimer {
	  free(): void;
	/**
	* Distribution Timer constructor, technically the size is a parameter but as
	* of now, the size is hard-coded whenever you taken in labels. Maybe that
	* will be fixed, maybe it won't.
	* 
	* If you are running a release version of the code, set active to false to
	* minimize the impact of the timer on the code. No calculations will be run.
	* @param {number} size
	* @param {boolean} active
	* @returns {DistributionTimer}
	*/
	  static new(size: number, active: boolean): DistributionTimer;
	/**
	* Call this at the start of a section to time.
	*/
	  start_timer(): void;
	/**
	* Call this at the end of a section to time with the section's unique ID
	* @param {number} time_id
	*/
	  record_time(time_id: number): void;
	/**
	* Prints out the proportion of time spent in each section
	*/
	  print_distribution(): void;
	/**
	* @param {DistributionTimer} other
	*/
	  combine(other: DistributionTimer): void;
	}
	/**
	*/
	export class _Worker {
	  free(): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_choices: (a: number, b: number) => void;
  readonly gen_random_board: () => number;
  readonly __wbg_board_free: (a: number) => void;
  readonly board_from_str: (a: number, b: number) => number;
  readonly board_get_player_turn: (a: number) => number;
  readonly board_get_string: (a: number, b: number) => void;
  readonly board_get_cell: (a: number, b: number, c: number) => number;
  readonly board_run_turn: (a: number, b: number) => number;
  readonly board_get_player_squares: (a: number, b: number, c: number) => void;
  readonly solve_board: (a: number, b: number, c: number) => number;
  readonly test_distribution_timer: () => void;
  readonly __wbg_distributiontimer_free: (a: number) => void;
  readonly distributiontimer_new: (a: number, b: number) => number;
  readonly distributiontimer_start_timer: (a: number) => void;
  readonly distributiontimer_record_time: (a: number, b: number) => void;
  readonly distributiontimer_print_distribution: (a: number) => void;
  readonly distributiontimer_combine: (a: number, b: number) => void;
  readonly wmt_bootstrap: (a: number, b: number, c: number) => number;
  readonly __wbg__worker_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h890dbfcd307c8a95: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdc27d817e80cec03: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h6212bc83b9e52cf5: (a: number, b: number, c: number, d: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
