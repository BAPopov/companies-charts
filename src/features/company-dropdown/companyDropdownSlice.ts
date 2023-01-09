import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';


export interface SelectedCompany {
    id?: number,
    value: string;
    label: string;
}

interface DropdownState {
    selectedCompany: SelectedCompany
}

const initialState: DropdownState = {
    selectedCompany: {
        value: '',
        label: ''
    }
};



export const companyDropdownSlice = createSlice({
    name: 'companyDropdown',
    initialState,
    reducers: {
        setSelectedCompany: (state, action: PayloadAction<SelectedCompany>) => {
            state.selectedCompany = action.payload;
        },
    },

});

export const { setSelectedCompany } = companyDropdownSlice.actions;

export const selectSelectedCompany = (state: RootState) => state.companyDropdown.selectedCompany;

export const selectSelectedCompanyValue = (state: RootState) => state.companyDropdown.selectedCompany.value;




export default companyDropdownSlice.reducer;
