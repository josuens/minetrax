<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('minecraft_server_live_infos', function (Blueprint $table) {
            $table->index('created_at');
            $table->index('online_players');
            $table->index('tps');
            $table->index('free_disk_in_kb');
        });


        Schema::table('server_chatlogs', function (Blueprint $table) {
            $table->index('created_at');
            $table->index('type');
        });

        Schema::table('server_consolelogs', function (Blueprint $table) {
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('minecraft_server_live_infos', function (Blueprint $table) {
            $table->dropIndex(['created_at']);
            $table->dropIndex(['online_players']);
            $table->dropIndex(['tps']);
            $table->dropIndex(['free_disk_in_kb']);
        });

        Schema::table('server_chatlogs', function (Blueprint $table) {
            $table->dropIndex(['created_at']);
            $table->dropIndex(['type']);
        });

        Schema::table('server_consolelogs', function (Blueprint $table) {
            $table->dropIndex(['created_at']);
        });
    }
};
