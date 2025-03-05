'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function NewsComparisonMockup() {
  const [activeTab, setActiveTab] = useState('left');

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <h3 className="font-bold">Breaking News: Economic Policy Change</h3>
        <p className="text-sm text-gray-500">See how different outlets cover the same story</p>
      </div>

      <Tabs defaultValue="left" className="w-full" onValueChange={setActiveTab}>
        <div className="px-4 pt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="left" className="text-xs sm:text-sm">
              Left-Leaning
            </TabsTrigger>
            <TabsTrigger value="center" className="text-xs sm:text-sm">
              FactFlow Analysis
            </TabsTrigger>
            <TabsTrigger value="right" className="text-xs sm:text-sm">
              Right-Leaning
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="left" className="p-4">
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800">Progressive Times</h4>
              <p className="text-sm">
                Government Expands Social Safety Net with Historic Investment
              </p>
            </div>
            <p className="text-sm text-gray-700">
              The administration's bold new economic policy represents a long-overdue investment in
              working families. Experts praise the move as a step toward reducing inequality.
            </p>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-red-700">
                Bias Alert: Emotionally charged language, omits potential economic concerns
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="center" className="p-4">
          <div className="space-y-4">
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-800">FactFlow Balanced View</h4>
              <p className="text-sm">
                New Economic Policy Introduces Changes to Social Programs and Tax Structure
              </p>
            </div>
            <p className="text-sm text-gray-700">
              The administration has introduced a new economic policy that increases funding for
              social programs by $200B while adjusting corporate tax rates. Economists have mixed
              views on the long-term impact, with some highlighting benefits for lower-income
              households and others expressing concerns about potential effects on business growth.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-green-700">
                Verified Facts: Policy details cross-checked with official documents and expert
                analysis
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="right" className="p-4">
          <div className="space-y-4">
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
              <h4 className="font-bold text-red-800">Conservative Herald</h4>
              <p className="text-sm">Government Spending Spree Threatens Economic Stability</p>
            </div>
            <p className="text-sm text-gray-700">
              The administration's reckless new policy will burden taxpayers and job creators.
              Business leaders warn of dire consequences for economic growth and inflation.
            </p>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-red-700">
                Bias Alert: Uses fear-based language, omits potential benefits for certain groups
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gray-100 p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            AI Analysis:{' '}
            {activeTab === 'left'
              ? '62% bias detected'
              : activeTab === 'right'
              ? '58% bias detected'
              : '< 5% bias detected'}
          </div>
          <button className="text-sm text-blue-600 font-medium">Read Full Analysis →</button>
        </div>
      </div>
    </div>
  );
}
