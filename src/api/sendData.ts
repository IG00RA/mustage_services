interface QueryParams {
  [key: string]: string | null | undefined;
  refId?: string | null | undefined;
  sub1?: string | null | undefined;
  sub2?: string | null | undefined;
  sub3?: string | null | undefined;
  sub4?: string | null | undefined;
  sub5?: string | null | undefined;
  sub6?: string | null | undefined;
  sub7?: string | null | undefined;
  sub8?: string | null | undefined;
  fbp?: string | null | undefined;
}

let url = 'Не вказано';
if (typeof window !== 'undefined') {
  url = document.referrer || 'Не вказано';
}
function getQueryParams(): QueryParams {
  if (typeof window === 'undefined') {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);
  const params: QueryParams = {};

  params.refId = searchParams.get('ref_id') || null;
  params.sub1 = searchParams.get('sub1') || null;
  params.sub2 = searchParams.get('sub2') || null;
  params.sub3 = searchParams.get('sub3') || null;
  params.sub4 = searchParams.get('sub4') || null;
  params.sub5 = searchParams.get('sub5') || null;
  params.sub6 = searchParams.get('sub6') || null;
  params.sub7 = searchParams.get('sub7') || null;
  params.sub8 = searchParams.get('sub8') || null;
  params.fbp = searchParams.get('fbp') || null;

  return params;
}

export const sendToGoogleScript = async (link: string) => {
  const requestData = {
    link,
    url,
    ...getQueryParams(),
  };
  window.open(link, '_blank');

  try {
    const response = await fetch('/api/sendToGoogle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send data to API: ${errorText}`);
    }
  } catch (error) {
    console.error('Error sending data to API: ', error);
    throw new Error('Error sending data to API: ' + error);
  }
};
