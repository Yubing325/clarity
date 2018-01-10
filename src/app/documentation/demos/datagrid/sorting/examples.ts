/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    sortingTS: `
import {ClrDatagridComparatorInterface} from "@clr/angular";

class PokemonComparator implements ClrDatagridComparatorInterface<User> {
    compare(a: User, b: User) {
        return a.pokemon.number - b.pokemon.number;
    }
}

@Component({ /* ... */ })
class MyComponent {
    private pokemonComparator = new PokemonComparator();
}
`,

    sortingHTML: `
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'"
               [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
`
};
