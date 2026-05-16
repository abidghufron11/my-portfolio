"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, MapPin, Mail, Link2, GitBranch, Users, BookOpen, 
  FolderGit2, ExternalLink, CameraIcon, Phone 
} from "lucide-react";

interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  email: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GitHubProfileModal({ isOpen, onClose }: GitHubProfileModalProps) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.github.com/users/abidghufron11");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-800 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent"
          >
            {/* Header */}
            <div className="sticky top-0 bg-dark-800/95 backdrop-blur border-b border-white/10 p-6 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GitBranch className="text-accent" size={24} /> GitHub Profile
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin mb-3" />
                  <p className="text-sm">Loading data...</p>
                </div>
              ) : (
                profile && (
                  <>
                    {/* 1. Header Profile */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <img
                        src={profile.avatar_url}
                        alt={profile.login}
                        className="w-24 h-24 rounded-full border-2 border-accent shadow-lg object-cover"
                      />
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-2xl font-bold text-white">{profile.name || profile.login}</h3>
                        <p className="text-accent text-sm mb-2">@{profile.login}</p>
                        <p className="text-gray-300 text-sm mb-4">{profile.bio || "Fullstack Developer & AI Enthusiast"}</p>
                        
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-gray-400">
                          {profile.location && (
                            <span className="flex items-center gap-1"><MapPin size={12} /> {profile.location}</span>
                          )}
                          <span className="flex items-center gap-1"><Users size={12} /> {profile.followers} Followers</span>
                          <span className="flex items-center gap-1"><FolderGit2 size={12} /> {profile.public_repos} Repos</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Social Accounts (Instagram & WhatsApp) */}
                    <div className="bg-dark-900/50 p-5 rounded-xl border border-white/5">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Social Accounts</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Instagram */}
                        <a 
                          href="https://instagram.com/a.ghufron_" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-accent/10 border border-white/10 rounded-lg transition-all group hover:border-accent/30"
                        >
                          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white">
                            <CameraIcon size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Instagram</span>
                            <span className="text-sm font-bold text-gray-200 group-hover:text-white">@a.ghufron_</span>
                          </div>
                        </a>

                        {/* WhatsApp */}
                        <a 
                          href="https://wa.me/6285776043904" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-green-500/10 border border-white/10 rounded-lg transition-all group hover:border-green-500/30"
                        >
                          <div className="p-2 bg-green-500 rounded-full text-white">
                            <Phone size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400">WhatsApp</span>
                            <span className="text-sm font-bold text-gray-200 group-hover:text-white">+62 857 7604 3904</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* 3. GitHub Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <a 
                        href={`https://github.com/${profile.login}?tab=repositories`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-dark-900 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group"
                      >
                        <FolderGit2 className="mx-auto mb-2 text-gray-400 group-hover:text-accent transition-colors" size={20} />
                        <div className="text-xl font-bold text-white">{profile.public_repos}</div>
                        <div className="text-xs text-gray-400">Repositories</div>
                      </a>
                      
                      <a 
                        href={`https://github.com/users/${profile.login}/projects`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-dark-900 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group"
                      >
                        <BookOpen className="mx-auto mb-2 text-gray-400 group-hover:text-accent transition-colors" size={20} />
                        <div className="text-xl font-bold text-white">View</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </a>

                      <div className="p-4 bg-dark-900 rounded-xl border border-white/10">
                        <Users className="mx-auto mb-2 text-gray-400" size={20} />
                        <div className="text-xl font-bold text-white">{profile.followers}</div>
                        <div className="text-xs text-gray-400">Followers</div>
                      </div>
                    </div>

                    {/* 4. Action Button */}
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-black font-bold rounded-xl hover:bg-accent-hover transition-colors group"
                    >
                      View Full Profile on GitHub 
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}