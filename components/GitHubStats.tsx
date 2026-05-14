"use client";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, Code2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: Record<string, number>;
  topRepos: GitHubRepo[];
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GANTI DENGAN GITHUB USERNAME KAMU
  const username = "abidghufron";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        
        if (!reposRes.ok) throw new Error("Failed to fetch GitHub data");
        
        const repos: GitHubRepo[] = await reposRes.json();
        
        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
        
        const languages: Record<string, number> = {};
        repos.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        const topRepos = repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3);

        setStats({
          totalRepos: repos.length,
          totalStars,
          totalForks,
          topLanguages: languages,
          topRepos
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">GitHub <span className="text-accent">Stats</span></h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Loader2 className="animate-spin" size={20} />
            <span>Loading GitHub stats...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center text-red-400">
          <p>Failed to load GitHub stats: {error}</p>
        </div>
      </section>
    );
  }

  if (!stats) return null;

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub <span className="text-accent">Stats</span></h2>
        <p className="text-gray-400">My open source contributions and projects</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-dark-800/30 border border-white/10 rounded-xl text-center"
        >
          <GitBranch className="mx-auto mb-2 text-accent" size={32} />
          <div className="text-3xl font-bold text-white">{stats.totalRepos}</div>
          <div className="text-sm text-gray-400">Repositories</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-dark-800/30 border border-white/10 rounded-xl text-center"
        >
          <Star className="mx-auto mb-2 text-yellow-500" size={32} />
          <div className="text-3xl font-bold text-white">{stats.totalStars}</div>
          <div className="text-sm text-gray-400">Stars Earned</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-dark-800/30 border border-white/10 rounded-xl text-center"
        >
          <GitFork className="mx-auto mb-2 text-blue-500" size={32} />
          <div className="text-3xl font-bold text-white">{stats.totalForks}</div>
          <div className="text-sm text-gray-400">Forks</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-dark-800/30 border border-white/10 rounded-xl text-center"
        >
          <Code2 className="mx-auto mb-2 text-green-500" size={32} />
          <div className="text-3xl font-bold text-white">{Object.keys(stats.topLanguages).length}</div>
          <div className="text-sm text-gray-400">Languages</div>
        </motion.div>
      </div>

      {/* Top Repositories */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6">Top Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.topRepos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "#FF6B35" }}
              className="p-5 bg-dark-800/30 border border-white/10 rounded-xl transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-white text-lg">{repo.name}</h4>
                <GitBranch size={18} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {repo.description || "No description"}
              </p>
              <div className="flex items-center gap-4 text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 text-gray-400">
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Languages */}
      {Object.keys(stats.topLanguages).length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-6">Most Used Languages</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.topLanguages)
              .sort((a, b) => b[1] - a[1])
              .map(([lang, count], index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-dark-800 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  {lang} <span className="text-accent">({count})</span>
                </motion.span>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}