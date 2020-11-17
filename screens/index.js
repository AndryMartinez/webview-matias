import React from 'react';
import Screen from './Screen';

export const ProfileScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"Profile",
                                            url:"https://reactnavigation.org/docs/getting-started",
                                            icon:"user"
                                        },
                                        {
                                            name:"Profile2",
                                            url:"https://reactnavigation.org/docs/tab-based-navigation",
                                            icon:"user-check"
                                        },
                                        {
                                            name:"Profile3",
                                            url:"https://reactnavigation.org/docs/hello-react-navigation",
                                            icon:"user-plus",
                                            redirect:true

                                        }
                                        
                                    ]}
                                />)
export const MessageScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"Profile",
                                            url:"https://docs.expo.io/versions/latest/sdk/webview/",
                                            icon:"user"
                                        },
                                        {
                                            name:"Profile2",
                                            url:"https://docs.expo.io/",
                                            icon:"user-check"
                                        },
                                        {
                                            name:"Profile3",
                                            url:"https://docs.expo.io/versions/latest/",
                                            icon:"user-plus"
                                        }
                                    ]} 
                                />)
export const ActivityScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"Activity",
                                            url:"activity.com",
                                            icon:"activity"
                                        },
                                        {
                                            name:"Activity2",
                                            url:"activity2.com",
                                            icon:"bar-chart"
                                        }
                                    ]} 
                                />)
export const ListScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"List",
                                            url:"list.com",
                                            icon:"list"
                                        },
                                        {
                                            name:"List2",
                                            url:"list2.com",
                                            icon:"file-text"
                                        }
                                    ]} 
                                />)
export const ReportScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"Report",
                                            url:"report.com",
                                            icon:"bar-chart"
                                        },
                                        {
                                            name:"Report2",
                                            url:"report2.com",
                                            icon:"bar-chart-2"
                                        }
                                    ]} 
                                />)
export const StatisticScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"Statistic",
                                            url:"statistic.com",
                                            icon:"trending-up"
                                        },
                                        {
                                            name:"Statistic2",
                                            url:"statistic2.com",
                                            icon:"trending-down"
                                        }
                                    ]} 
                                />)
export const SignOutScreen = ({navigation}) => 
                                (<Screen 
                                    navigation={navigation} 
                                    screens={[
                                        {
                                            name:"LogIn",
                                            url:"login.com",
                                            icon:"log-in"
                                        },
                                        {
                                            name:"SignOut",
                                            url:"signOut.com",
                                            icon:"log-out"
                                        }
                                    ]} 
                                />) 