const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

if (!user) {
    alert("Sila buka Mini App melalui Telegram.");
} else {

    document.getElementById("nama").textContent =
        user.first_name || "-";

    document.getElementById("userid").textContent =
        user.id || "-";

    document.getElementById("username").textContent =
        user.username ? "@" + user.username : "-";

    async function semakAhli() {

        const { data, error } = await window.supabaseClient
            .from("members")
            .select("*")
            .eq("telegram_id", String(user.id))
            .maybeSingle();

        if (error) {
            console.error(error);
            return;
        }

        if (data) {

            document.getElementById("btnProfil").disabled = false;
            document.getElementById("btnKad").disabled = false;

        } else {

            document.getElementById("btnProfil").disabled = true;
            document.getElementById("btnKad").disabled = true;

        }

    }

    semakAhli();

}

document.getElementById("btnProfil").onclick = () => {
    window.location.href = "profil.html";
};

document.getElementById("btnKad").onclick = () => {
    window.location.href = "kad.html";
};

document.getElementById("btnReferral").onclick = () => {
    alert("Coming Soon");
};

document.getElementById("btnReward").onclick = () => {
    alert("Coming Soon");
};
