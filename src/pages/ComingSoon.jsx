import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

function ComingSoon({ title = "Coming Soon", description = "This page is under development" }) {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Card className="bg-black border border-gray-800">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {title === "Coming Soon" ? t('common.comingSoon') : title}
              </h1>
              <p className="text-xl text-gray-300 mb-8" dir="auto">
                {description === "This page is under development" ? t('common.underDevelopment') : description}
              </p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">{t('common.underDevelopment')}</span>
              </div>
              <p className="text-gray-300 text-sm" dir="auto">
                {t('common.stayTuned')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gradient">
                <Link to="/">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {t('common.backToHome')}
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/protocol">
                  {t('nav.protocol')}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ComingSoon;