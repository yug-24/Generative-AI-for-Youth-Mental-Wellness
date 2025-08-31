import { useState } from "react";
import Spinner from "./Spinner";
import { updateProfile, updatePreferences, deleteAccount } from "@/lib/api-mock";

export function ProfileSettingsForm(){
  const [name, setName] = useState("Aanya");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSave = async ()=>{
    setLoading(true);
    await updateProfile({ name, password });
    setPassword("");
    setLoading(false);
    alert("Profile saved (mock)");
  };

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">Profile</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2"/>
        </div>
      </div>
      <button onClick={onSave} disabled={loading} className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">{loading && <Spinner size={16}/>} Save</button>
    </div>
  );
}

export function PrivacySettings(){
  const [emailNotif, setEmailNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSave = async ()=>{
    setLoading(true);
    await updatePreferences({ emailNotif, inAppNotif });
    setLoading(false);
    alert("Preferences saved (mock)");
  };

  const onDelete = async ()=>{
    if(!confirm("Are you sure you want to delete your account? This cannot be undone.")) return;
    await deleteAccount();
    alert("Account deleted (mock)");
  };

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">Privacy & Notifications</h2>
      <div className="mt-4 space-y-3">
        <label className="flex items-center justify-between rounded-md border p-3 bg-background">
          <span>Email notifications</span>
          <input type="checkbox" checked={emailNotif} onChange={(e)=>setEmailNotif(e.target.checked)} className="h-5 w-5"/>
        </label>
        <label className="flex items-center justify-between rounded-md border p-3 bg-background">
          <span>In-app reminders</span>
          <input type="checkbox" checked={inAppNotif} onChange={(e)=>setInAppNotif(e.target.checked)} className="h-5 w-5"/>
        </label>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">{loading && <Spinner size={16}/>} Save</button>
        <button onClick={onDelete} className="ml-auto inline-flex items-center rounded-md bg-red-600 px-4 py-2 font-semibold text-white">Delete My Account</button>
      </div>
    </div>
  );
}
