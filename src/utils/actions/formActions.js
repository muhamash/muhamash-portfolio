'use server'

export async function contactForm(prevState, formData) {
    try
    {
        if ( formData )
        {
            const email = formData.get( "email" );
            const message = formData.get( "message" );
            // console.log( {email, message} );
            // redirect( "/thanks" );
            return { message: "oka", success: true, data: { email, message } };
        }
    }
    catch ( error )
    {
        console.error( error || error?.message );
        return { message: error || error?.message, success: false }
    }
}