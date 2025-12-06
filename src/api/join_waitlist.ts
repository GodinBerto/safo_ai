const api = "https://godinberto.pythonanywhere.com/api/v1/safoai/waitlist/";

export async function JoinWaitlist(email: string) {
  const response = await fetch(`${api}/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  // Return both status & JSON safely
  const data = await response.json().catch(() => ({}));

  return {
    status: response.status,
    ok: response.ok,
    data,
  };
}

export async function GetWaitlistCount() {
  const response = await fetch(`${api}/all`);
  if (!response.ok) {
    throw new Error("Failed to fetch waitlist count");
  }

  const responseData = await response.json();

  const count = responseData?.total;

  return count;
}
