import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const version = searchParams.get('version') || '2.1';
    const number = searchParams.get('number');
    
    if (!number) {
      return NextResponse.json({ error: 'NPI number is required' }, { status: 400 });
    }

    const response = await fetch(
      `https://npiregistry.cms.hhs.gov/api/?version=${version}&number=${number}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching NPI data:', error);
    return NextResponse.json({ error: 'Failed to fetch NPI data' }, { status: 500 });
  }
}
