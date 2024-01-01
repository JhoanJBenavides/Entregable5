const paginatePokemons = (pokemons, currentPage) => {
    //? Cantidad de pokemons por pagina
    const POKEMONS_PER_PAGE = 20

    //? Los pokemons que se van a renderizar en la pagina acutal
    const sliceEnd = currentPage * POKEMONS_PER_PAGE
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE
    const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd)

    //? Ultima pagina o la cantidad de paginas
    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE)

    //? Bloque actual
    const PAGES_PER_BLOCK = 7
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK) 

    //? Paginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = []
    const maxPage = actualBlock * PAGES_PER_BLOCK
    const minPage = maxPage - PAGES_PER_BLOCK + 1
    for(let i = minPage; i<= maxPage ; i++) {
        if (i<= lastPage) {
        pagesInCurrentBlock.push(i)
        }
    }

    return {
        pokemonsInCurrentPage,
        lastPage,
        pagesInCurrentBlock
    }
}
export {paginatePokemons}