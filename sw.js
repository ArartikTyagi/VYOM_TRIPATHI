/** 5135803627277460602 */
self.document = self;
self.window = self;
var ytcfg = {
    d: function() {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {})
    },
    get: function(k, o) {
        return k in ytcfg.d() ? ytcfg.d()[k] : o
    },
    set: function() {
        var a = arguments;
        if (a.length > 1)
            ytcfg.d()[a[0]] = a[1];
        else {
            var k;
            for (k in a[0])
                ytcfg.d()[k] = a[0][k]
        }
    }
};
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "H5_enable_full_pacf_logging": true,
        "H5_use_async_logging": true,
        "ab_det_el_h": true,
        "ab_sa_ef": true,
        "action_companion_center_align_description": true,
        "allow_skip_networkless": true,
        "att_web_record_metrics": true,
        "attmusi": true,
        "bg_st_hr": true,
        "bottom_sheet_layout_wiz_content": true,
        "clean_up_manual_attribution_header": true,
        "clear_user_partitioned_ls": true,
        "compress_gel": true,
        "cow_optimize_idom_compat": true,
        "csi_config_handling_infra": true,
        "deprecate_csi_has_info": true,
        "disable_cached_masthead_data": true,
        "disable_child_node_auto_formatted_strings": true,
        "disable_enf_isd": true,
        "disable_log_to_visitor_layer": true,
        "disable_pacf_logging_for_memory_limited_tv": true,
        "disable_safari_ui_status_check": true,
        "disable_simple_mixed_direction_formatted_strings": true,
        "enable_ab_report_on_errorscreen": true,
        "enable_ab_rp_int": true,
        "enable_active_view_display_ad_renderer_web_home": true,
        "enable_ad_context_in_vss_pings": true,
        "enable_async_ab_enf": true,
        "enable_cairo_refresh_ringo2_web": true,
        "enable_cairo_refresh_signature_moments_web": true,
        "enable_cairo_refresh_web": true,
        "enable_client_creator_goal_ticker_bar_revamp": true,
        "enable_client_only_wiz_direct_reactions": true,
        "enable_client_only_wiz_flush_queue_fix": true,
        "enable_client_only_wiz_ordered_reaction_execution": true,
        "enable_client_sli_logging": true,
        "enable_cow_info_csi": true,
        "enable_entity_store_from_dependency_injection": true,
        "enable_eom_webview_header": true,
        "enable_first_party_auth_v2": true,
        "enable_flow_logging_p4e": true,
        "enable_fully_reactive_badge_shape": true,
        "enable_gel_log_commands": true,
        "enable_handles_account_menu_switcher": true,
        "enable_mixed_direction_formatted_strings": true,
        "enable_pacf_slot_asde_infeed_h5": true,
        "enable_pacf_slot_asde_player_byte_h5": true,
        "enable_pacf_slot_asde_player_byte_h5_TV": true,
        "enable_persistent_device_token": true,
        "enable_pl_r_c_s": true,
        "enable_pl_r_si_fa": true,
        "enable_populate_att_psd_in_abe_feedback": true,
        "enable_populate_psd_in_abe_feedback": true,
        "enable_redirect_linking_for_desktop_web_client": true,
        "enable_sdf_companion_h5": true,
        "enable_sdf_in_player_video_h5": true,
        "enable_sdf_midroll_postroll_player_bytes_video_h5": true,
        "enable_sdf_preroll_player_bytes_video_h5": true,
        "enable_sdf_preroll_player_bytes_video_tv": true,
        "enable_server_stitched_dai": true,
        "enable_skip_ad_guidance_prompt": true,
        "enable_skippable_ads_for_unplugged_ad_pod": true,
        "enable_smearing_expansion_dai": true,
        "enable_tectonic_ad_ux_for_halftime": true,
        "enable_third_party_info": true,
        "enable_topsoil_wta_for_halftime_live_infra": true,
        "enable_web_96_bit_csn": true,
        "enable_web_home_top_landscape_image_layout_level_click": true,
        "enable_web_tiered_gel": true,
        "enable_yt_ata_iframe_authuser": true,
        "err_on_pl_r_c": true,
        "export_networkless_options": true,
        "fetch_bid_for_dclk_status": true,
        "fill_single_video_with_notify_to_lasr": true,
        "fix_isd_logging": true,
        "gcf_config_store_enabled": true,
        "h5_companion_enable_adcpn_macro_substitution_for_click_pings": true,
        "h5_inplayer_enable_adcpn_macro_substitution_for_click_pings": true,
        "h5_reset_cache_and_filter_before_update_masthead": true,
        "hide_endpoint_overflow_on_ytd_display_ad_renderer": true,
        "html5_enable_single_video_vod_ivar_on_pacf": true,
        "html5_log_trigger_events_with_debug_data": true,
        "html5_recognize_predict_start_cue_point": true,
        "html5_server_stitched_dai_group": true,
        "il_attach_cache_limit": true,
        "il_use_view_model_logging_context": true,
        "json_condensed_response": true,
        "kev_adb_pg": true,
        "kevlar_dropdown_fix": true,
        "kevlar_gel_error_routing": true,
        "kevlar_sw_app_wide_fallback": true,
        "kevlar_use_wil_icons": true,
        "kevlar_vimio_use_shared_monitor": true,
        "live_chat_enable_controller_extraction": true,
        "live_chat_enable_rta_manager": true,
        "log_click_with_layer_from_element_in_command_handler": true,
        "log_errors_through_nwl_on_retry": true,
        "log_gel_compression_latency": true,
        "log_heartbeat_with_lifecycles": true,
        "migrate_events_to_ts": true,
        "migrate_remaining_web_ad_badges_to_innertube": true,
        "mweb_deprecate_skip_ve_logging": true,
        "mweb_shorts_comments_panel_id_change": true,
        "net_pings_use_fetch": true,
        "networkless_gel": true,
        "networkless_logging": true,
        "new_csn_storage_design": true,
        "nwl_send_fast_on_unload": true,
        "nwl_send_from_memory_when_online": true,
        "offline_error_handling": true,
        "pageid_as_header_web": true,
        "pdg_enable_creator_goal_ticker_chip_commands": true,
        "polymer_bad_build_labels": true,
        "polymer_verifiy_app_state": true,
        "qoe_send_and_write": true,
        "read_data_from_web_component_wrapper": true,
        "record_app_crashed_web": true,
        "remove_masthead_channel_banner_on_refresh": true,
        "replace_client_url_parsing_with_server_signal": true,
        "replace_closure_window_with_updated_ytwindow_in_studio": true,
        "scheduler_use_raf_by_default": true,
        "service_worker_static_routing_exclude_embed": true,
        "service_worker_static_routing_registration": true,
        "shared_enable_controller_extraction": true,
        "shared_enable_sink_wrapping": true,
        "shell_load_gcf": true,
        "skip_invalid_ytcsi_ticks": true,
        "skip_ls_gel_retry": true,
        "skip_setting_info_in_csi_data_object": true,
        "smarter_ve_dedupping": true,
        "start_client_gcf": true,
        "start_sending_config_hash": true,
        "suppress_error_204_logging": true,
        "sw_nav_request_network_first": true,
        "transport_use_scheduler": true,
        "trigger_impression_pings_on_view_search_desktop": true,
        "update_chrome_api_monitoring_allowed_features": true,
        "update_log_event_config": true,
        "use_color_palettes_modern_collections_v2": true,
        "use_core_sm": true,
        "use_csi_stp_handler": true,
        "use_event_time_ms_header": true,
        "use_fifo_for_networkless": true,
        "use_infogel_early_logging": true,
        "use_new_in_memory_storage": true,
        "use_player_abuse_bg_library": true,
        "use_request_time_ms_header": true,
        "use_session_based_sampling": true,
        "use_ts_visibilitylogger": true,
        "vss_final_ping_send_and_write": true,
        "vss_playback_use_send_and_write": true,
        "web_api_url": true,
        "web_csi_action_sampling_enabled": true,
        "web_csi_debug_sample_enabled": true,
        "web_dedupe_ve_grafting": true,
        "web_enable_ab_em_rsp": true,
        "web_enable_ab_rsp_cl": true,
        "web_enable_abd_ref": true,
        "web_enable_course_icon_update": true,
        "web_enable_error_204": true,
        "web_forward_command_on_pbj": true,
        "web_gcf_hashes_innertube": true,
        "web_log_memory_total_kbytes": true,
        "web_masthead_visited_channel_color_fix": true,
        "web_one_platform_error_handling": true,
        "web_onesie_omit_api_key": true,
        "web_prefetch_preload_video": true,
        "web_resizable_advertiser_banner_on_masthead_safari_fix": true,
        "web_scheduler_auto_init": true,
        "web_yt_config_context": true,
        "web_yt_net_omit_api_key": true,
        "webfe_disable_ab_em_plb": true,
        "wil_icon_render_when_idle": true,
        "wiz_diff_overwritable": true,
        "wiz_memoize_stamper_items": true,
        "wiz_prevent_watched_double_logging": true,
        "wiz_use_generic_logging_infra": true,
        "woffle_used_state_report": true,
        "ytidb_fetch_datasync_ids_for_data_cleanup": true,
        "H5_async_logging_delay_ms": 30000.0,
        "app_shell_asset_log_fraction": 0.01,
        "log_window_onerror_fraction": 0.1,
        "tv_pacf_logging_sample_rate": 0.01,
        "ytidb_transaction_ended_event_rate_limit": 0.02,
        "botguard_async_snapshot_timeout_ms": 3000,
        "check_navigator_accuracy_timeout_ms": 0,
        "compression_disable_point": 10,
        "gel_min_batch_size": 3,
        "gel_queue_timeout_max_ms": 300000,
        "hide_cta_for_home_web_video_ads_animate_in_time": 2,
        "initial_gel_batch_timeout": 2000,
        "max_body_size_to_compress": 500000,
        "max_prefetch_window_sec_for_livestream_optimization": 10,
        "min_prefetch_offset_sec_for_livestream_optimization": 20,
        "network_polling_interval": 30000,
        "send_config_hash_timer": 0,
        "slow_compressions_before_abandon_count": 4,
        "swatcheroo_pbs_max_delay_ms": 3000,
        "web_foreground_heartbeat_interval_ms": 28000,
        "web_logging_max_batch": 150,
        "wil_icon_max_concurrent_fetches": 9999,
        "ytidb_remake_db_retries": 3,
        "ytidb_reopen_db_retries": 3,
        "il_payload_scraping": "",
        "web_client_version_override": "",
        "kevlar_command_handler_command_banlist": [],
        "web_op_signal_type_banlist": []
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20241219.01.01",
    "INNERTUBE_CONTEXT": {
        "client": {
            "hl": "en",
            "gl": "IN",
            "clientName": "WEB",
            "clientVersion": "2.20241219.01.01"
        }
    },
    "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
    "INNERTUBE_CONTEXT_CLIENT_VERSION": "2.20241219.01.01",
    "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS": {
        "client.name": "WEB"
    }
});
window.ytcfg.obfuscatedData_ = [];
if (self.trustedTypes && self.trustedTypes.createPolicy) {
    var policy = self.trustedTypes.createPolicy('youtubeServiceWorkerPolicy', {
        createScriptURL: function(unused) {
            return 'https:\/\/www.youtube.com\/s\/desktop\/c01ea7e3\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js';
        }
    });
    importScripts(policy.createScriptURL(''));
} else {
    importScripts('https:\/\/www.youtube.com\/s\/desktop\/c01ea7e3\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js');
}