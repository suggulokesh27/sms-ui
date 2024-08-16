import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    organisationData : null
}

const OrganisationSlice = createSlice(
    {
        name: "organisation",
        initialState,
        reducers: {
            setOrg: (state, action) => {

              state.organisationData = action.payload;
            },

        }

    }
);

export const { setOrg } = OrganisationSlice.actions;
export default OrganisationSlice.reducer;