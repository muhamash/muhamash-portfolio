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

export async function hireMeForm(prevState, formData) {
  const selectedServices = formData.getAll('services');

  if (selectedServices.length === 0) {
    return { message: 'Please select at least one service.', error: true };
  }

  await new Promise( ( resolve ) => setTimeout( resolve, 1000 ) );

  const data = {
    name: formData.get( 'name' ),
    currency: formData.get('currency'),
    email: formData.get( 'email' ),
    budget: formData.get("budget"),
    phone: formData.get('phone'),
    message: formData.get('message'),
    source: formData.get('source'),
    services: formData.getAll('services'),
  };
  console.log('Submitting Form:', data);

  // Return a success message or error state
  return { message: 'Form submitted successfully!', data, error: false, status: true };
}